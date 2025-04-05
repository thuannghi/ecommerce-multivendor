package com.nnt.controller;

import com.nnt.model.Product;
import com.nnt.model.Review;
import com.nnt.model.User;
import com.nnt.request.CreateReviewRequest;
import com.nnt.response.ApiResponse;
import com.nnt.service.ProductService;
import com.nnt.service.ReviewService;
import com.nnt.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/review")
public class ReviewController {

    private final ReviewService reviewService;

    private final UserService userService;

    private final ProductService productService;

    @GetMapping("/product/{productId}/review")
    public ResponseEntity<List<Review>> getReviewByProductId(@PathVariable Long productId) {
        List<Review> reviews = reviewService.getReviewByProductId(productId);
        return ResponseEntity.ok(reviews);
    }

    @PostMapping("/products/{productId}/reviews")
    public ResponseEntity<Review> writeReview(@RequestHeader("Authorization") String jwt, @RequestBody CreateReviewRequest req, @PathVariable Long productId) throws Exception {
        User user = userService.findUserByJwtToken(jwt);
        Product product = productService.findProductById(productId);
        Review review = reviewService.createReview(req, user, product);
        return ResponseEntity.ok(review);
    }

    @PatchMapping("/review/{reviewId}")
    public ResponseEntity<Review> updateReview(@RequestHeader("Authorization") String jwt,
                                               @RequestBody CreateReviewRequest req, @PathVariable Long reviewId) throws Exception {
        User user = userService.findUserByJwtToken(jwt);
        Review review = reviewService.updateReview(reviewId, req.getReviewText(), req.getReviewRating(), user.getId());
        return ResponseEntity.ok(review);
    }

    @DeleteMapping("/review/{reviewId}")
    public ResponseEntity<ApiResponse> deleteReview(@RequestHeader("Authorization") String jwt,
                                                    @PathVariable Long reviewId) throws Exception {
        User user = userService.findUserByJwtToken(jwt);
        reviewService.deleteReview(reviewId, user.getId());
        ApiResponse res = new ApiResponse();
        res.setMessage("Review deleted successfully!");
        return ResponseEntity.ok(res);
    }
}
