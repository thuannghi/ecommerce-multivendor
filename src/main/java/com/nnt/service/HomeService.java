package com.nnt.service;

import com.nnt.model.Home;
import com.nnt.model.HomeCategory;

import java.util.List;

public interface HomeService {

    Home createHomePageData(List<HomeCategory> allCategories);
}
