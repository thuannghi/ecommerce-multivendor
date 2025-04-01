package com.nnt.service;

import com.nnt.model.Cart;
import com.nnt.model.CartItem;
import com.nnt.model.Product;
import com.nnt.model.User;

public interface CartService {

    CartItem addCartItem(User user, Product product, String size, int quantity);

    Cart findUserCart(User user);
}
