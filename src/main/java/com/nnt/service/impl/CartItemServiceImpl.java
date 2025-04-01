package com.nnt.service.impl;

import com.nnt.model.CartItem;
import com.nnt.model.User;
import com.nnt.repository.CartItemRepository;
import com.nnt.service.CartItemService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CartItemServiceImpl implements CartItemService {

    private final CartItemRepository cartItemRepository;

    @Override
    public CartItem updateCartItem(Long userId, Long id, CartItem cartItem) throws Exception {
        CartItem item = findCartItemById(id);
        User cartItemUser = item.getCart().getUser();

        if (cartItemUser.getId().equals(userId)) {
            item.setQuantity(cartItem.getQuantity());
            item.setMrpPrice(item.getQuantity() * item.getProduct().getMrpPrice());
            item.setSellingPrice(item.getQuantity() * item.getProduct().getSellingPrice());
            return cartItemRepository.save(item);
        }
        throw new Exception("you can't update this cartItem");
    }

    @Override
    public void RemoveCartItem(Long userId, Long cartItemId) {

    }

    @Override
    public CartItem findCartItemById(Long id) {
        return null;
    }
}
