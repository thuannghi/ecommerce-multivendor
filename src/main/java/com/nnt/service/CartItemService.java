package com.nnt.service;

import com.nnt.model.CartItem;

public interface CartItemService {

    CartItem updateCartItem(Long userId, Long id, CartItem cartItem) throws Exception;

    void RemoveCartItem(Long userId, Long cartItemId);

    CartItem findCartItemById(Long id);
}
