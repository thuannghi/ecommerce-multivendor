package com.nnt.service;

import com.nnt.model.Order;
import com.nnt.model.Seller;
import com.nnt.model.Transaction;

import java.util.List;

public interface TransactionService {

    Transaction createTransaction(Order order);

    List<Transaction> getTractionBySellerId(Seller seller);

    List<Transaction> getAllTransaction();
}
