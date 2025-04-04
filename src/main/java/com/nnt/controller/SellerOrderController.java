package com.nnt.controller;

import com.nnt.domain.OrderStatus;
import com.nnt.model.Order;
import com.nnt.model.Seller;
import com.nnt.service.OrderService;
import com.nnt.service.SellerService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/seller/order")
public class SellerOrderController {

    private final OrderService orderService;

    private final SellerService sellerService;

    @GetMapping
    public ResponseEntity<List<Order>> getAllOrderHandler(@RequestHeader("Authorization") String jwt) throws Exception {
        Seller seller = sellerService.getSellerProfile(jwt);
        List<Order> orders = orderService.sellersOrder(seller.getId());
        return new ResponseEntity<>(orders, HttpStatus.ACCEPTED);
    }

    @PatchMapping("/{orderId}/status/{orderStatus}")
    public ResponseEntity<Order> updateOrderHandler(@RequestHeader("Authorization") String jwt,
                                                    @PathVariable Long orderId,
                                                    @PathVariable OrderStatus orderStatus) throws Exception {
        Order order = orderService.updateOrderStatus(orderId, orderStatus);
        return new ResponseEntity<>(order, HttpStatus.ACCEPTED);
    }

}
