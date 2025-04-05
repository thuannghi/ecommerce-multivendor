package com.nnt.repository;

import com.nnt.model.WishList;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WishListRepository extends JpaRepository<WishList, Long> {

    WishList findByUserId(Long userId);
}
