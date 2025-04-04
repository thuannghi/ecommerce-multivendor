package com.nnt.repository;

import com.nnt.model.SellerReport;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SellerReportRepository extends JpaRepository<SellerReport, Long> {

    SellerReport findSellerReportById(Long sellerId);
}
