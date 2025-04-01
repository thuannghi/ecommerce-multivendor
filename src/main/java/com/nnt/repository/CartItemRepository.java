package com.nnt.repository;

import com.nnt.model.Cart;
import com.nnt.model.CartItem;
import com.nnt.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CartItemRepository extends JpaRepository<CartItem, Long> {

    CartItem findByCartAndProductAndSize(Cart cart, Product product, String size);
}
