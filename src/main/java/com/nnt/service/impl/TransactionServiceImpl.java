package com.nnt.service.impl;

import com.nnt.model.Order;
import com.nnt.model.Seller;
import com.nnt.model.Transaction;
import com.nnt.repository.SellerRepository;
import com.nnt.repository.TransactionRepository;
import com.nnt.service.SellerReportService;
import com.nnt.service.TransactionService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TransactionServiceImpl implements TransactionService {

    private final TransactionRepository transactionRepository;

    private final SellerRepository sellerRepository;

    @Override
    public Transaction createTransaction(Order order) {
        Seller seller = sellerRepository.findById(order.getSellerId())
                .orElseThrow(() -> new RuntimeException("Seller not found with id: " + order.getSellerId()));

        Transaction transaction = new Transaction();
        transaction.setSeller(seller);
        transaction.setCustomer(order.getUser());
        transaction.setOrder(order);

        return transactionRepository.save(transaction);
    }

    @Override
    public List<Transaction> getTractionBySellerId(Seller seller) {
        return transactionRepository.findBySellerId(seller.getId());
    }

    @Override
    public List<Transaction> getAllTransaction() {
        return transactionRepository.findAll();
    }
}
