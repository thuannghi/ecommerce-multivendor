package com.nnt.service;

import com.nnt.model.HomeCategory;

import java.util.List;

public interface HomeCategoryService {

    HomeCategory createHomeCategory(HomeCategory category);

    List<HomeCategory> createCategories(List<HomeCategory> homeCategories);

    HomeCategory updateHomeCategory(HomeCategory category, Long id) throws Exception;

    List<HomeCategory> getAllHomeCategories();
}
