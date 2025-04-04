package com.nnt.controller;

import com.nnt.model.Cart;
import com.nnt.model.CartItem;
import com.nnt.model.Product;
import com.nnt.model.User;
import com.nnt.request.AddItemRequest;
import com.nnt.response.ApiResponse;
import com.nnt.service.CartItemService;
import com.nnt.service.CartService;
import com.nnt.service.ProductService;
import com.nnt.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/cart")
public class CartController {

    private final CartService cartService;

    private final CartItemService cartItemService;

    private final UserService userService;

    private final ProductService productService;

    @GetMapping
    public ResponseEntity<Cart> findUserCartHandler(@RequestHeader("Authorization") String jwt) throws Exception {
        User user = userService.findUserByJwtToken(jwt);
        Cart cart = cartService.findUserCart(user);
        return new ResponseEntity<>(cart, HttpStatus.OK);
    }

    @PutMapping("/add")
    public ResponseEntity<CartItem> addItemToCart(@RequestHeader("Authorization") String jwt, @RequestBody AddItemRequest req) throws Exception {
        User user = userService.findUserByJwtToken(jwt);
        Product product = productService.findProductById(req.getProductId());
        CartItem cartItem = cartService.addCartItem(user, product, req.getSize(), req.getQuantity());
        ApiResponse apiResponse = new ApiResponse();
        apiResponse.setMessage("Item Added To Cart Successfully");
        return new ResponseEntity<>(cartItem, HttpStatus.ACCEPTED);
    }

    @DeleteMapping("/item/{cartItemId}")
    public ResponseEntity<ApiResponse> deleteCartItemHandler(@RequestHeader("Authorization") String jwt, @PathVariable Long cartItemId) throws Exception {
        User user = userService.findUserByJwtToken(jwt);
        cartItemService.removeCartItem(user.getId(), cartItemId);

        ApiResponse apiResponse = new ApiResponse();
        apiResponse.setMessage("Item removed from Cart Successfully");
        return new ResponseEntity<>(apiResponse, HttpStatus.ACCEPTED);
    }

    @PutMapping("item/{cartItemId}")
    public ResponseEntity<CartItem> updateCartItemHandler(@RequestHeader("Authorization") String jwt,
                                                             @PathVariable Long cartItemId,
                                                             @RequestBody CartItem cartItem) throws Exception {
        User user = userService.findUserByJwtToken(jwt);
        CartItem updatedCartItem = null;

        if (cartItem.getQuantity() > 0) {
            updatedCartItem = cartItemService.updateCartItem(user.getId(), cartItemId, cartItem);
        }
        return new ResponseEntity<>(updatedCartItem, HttpStatus.ACCEPTED);
    }
}
