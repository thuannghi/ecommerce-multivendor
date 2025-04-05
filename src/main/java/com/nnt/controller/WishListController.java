package com.nnt.controller;

import com.nnt.exception.ProductException;
import com.nnt.model.Product;
import com.nnt.model.User;
import com.nnt.model.WishList;
import com.nnt.service.ProductService;
import com.nnt.service.UserService;
import com.nnt.service.WishListService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/wishlist")
public class WishListController {

    private final WishListService wishListService;

    private final UserService userService;

    private final ProductService productService;

//    @PostMapping("/create")
//    public ResponseEntity<WishList> createWishList(@RequestBody User user) {
//        WishList wishList = wishListService.createWishList(user);
//        return ResponseEntity.ok(wishList);
//    }

    @GetMapping()
    public ResponseEntity<WishList> getWishListByUserId(@RequestHeader("Authorization") String jwt) throws Exception {
        User user = userService.findUserByJwtToken(jwt);
        WishList wishList = wishListService.getWishListByUserId(user);
        return ResponseEntity.ok(wishList);
    }

    @PostMapping("/add-product/{productId}")
    public ResponseEntity<WishList> addProductToWishList(@RequestHeader("Authorization") String jwt,
                                                         @PathVariable Long productId) throws Exception {
        Product product = productService.findProductById(productId);
        User user = userService.findUserByJwtToken(jwt);
        WishList updatedWishList = wishListService.addProductToWishList(user, product);
        return ResponseEntity.ok(updatedWishList);
    }

}
