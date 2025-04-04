package com.nnt.service;

import com.nnt.model.Seller;
import com.nnt.model.SellerReport;

public interface SellerReportService {

    SellerReport getSellerReport(Seller seller);

    SellerReport updateSellerReport(SellerReport sellerReport);
}
