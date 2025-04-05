package com.nnt.service.impl;

import com.nnt.domain.HomeCategorySection;
import com.nnt.model.Deal;
import com.nnt.model.Home;
import com.nnt.model.HomeCategory;
import com.nnt.repository.DealRepository;
import com.nnt.service.HomeService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class HomeServiceImpl implements HomeService {

    private final DealRepository dealRepository;

    @Override
    public Home createHomePageData(List<HomeCategory> allCategories) {
        List<HomeCategory> gridCategories = allCategories.stream().filter(category ->
                category.getSection() == HomeCategorySection.GRID).toList();
        List<HomeCategory> shopByCategories = allCategories.stream().filter(category ->
                category.getSection() == HomeCategorySection.SHOP_BY_CATEGORIES).toList();
        List<HomeCategory> electricCategories = allCategories.stream().filter(category ->
                category.getSection() == HomeCategorySection.ELECTRIC_CATEGORIES).toList();
        List<HomeCategory> dealCategories = allCategories.stream().filter(category ->
                category.getSection() == HomeCategorySection.DEALS).toList();

        List<Deal> createDeals = new ArrayList<>();
        if (dealRepository.findAll().isEmpty()) {
            List<Deal> deals = allCategories.stream().filter(category ->
                    category.getSection() == HomeCategorySection.DEALS)
                    .map(category -> new Deal(null, 10, category)).toList();
            createDeals = dealRepository.saveAll(deals);
        } else {
            createDeals = dealRepository.findAll();
        }
        Home home = new Home();
        home.setGrid(gridCategories);
        home.setShopByCategories(shopByCategories);
        home.setElectricCategories(electricCategories);
        home.setDeals(createDeals);
        home.setDealCategories(dealCategories);

        return home;
    }
}
