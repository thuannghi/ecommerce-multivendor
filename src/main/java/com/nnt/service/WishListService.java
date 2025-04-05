package com.nnt.service;

import com.nnt.model.Product;
import com.nnt.model.User;
import com.nnt.model.WishList;

public interface WishListService {

    WishList createWishList(User user);

    WishList getWishListByUserId(User user);

    WishList addProductToWishList(User user, Product Product);
}
