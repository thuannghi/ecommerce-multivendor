package com.nnt.service;

import com.nnt.model.Order;
import com.nnt.model.PaymentOrder;
import com.nnt.model.User;
import com.razorpay.PaymentLink;
import com.razorpay.RazorpayException;
import com.stripe.exception.StripeException;

import java.util.Set;

public interface PaymentService {

    PaymentOrder createPaymentOrder(User user, Set<Order> orders);

    PaymentOrder getPaymentOrderById(Long orderId) throws Exception;

    PaymentOrder getPaymentOrderByPaymentId(String orderId) throws Exception;

    Boolean proceedPaymentOrder(PaymentOrder paymentOrder, String paymentId, String paymentLinkId) throws RazorpayException;

    PaymentLink createRazorPayment(User user, Long amount, Long orderId) throws RazorpayException;

    String createStripePaymentLink(User user, Long amount, Long orderId) throws StripeException;
}
