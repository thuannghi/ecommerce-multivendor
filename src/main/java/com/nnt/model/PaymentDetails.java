package com.nnt.model;

import com.nnt.domain.PaymentStatus;
import lombok.Data;

@Data
public class PaymentDetails {

    private String paymentID;

    private String razorpayPaymentLinkID;

    private String razorpayPaymentLinkReferenceID;

    private String razorpayPaymentLinkStatus;

    private String razorpayPaymentID;

    private PaymentStatus status;
}
