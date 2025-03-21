package com.nnt.controller;

import com.nnt.response.APIResponse;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {

    @GetMapping("/")
    public APIResponse HomeControllerHandler() {
        APIResponse apiResponse = new APIResponse();
        apiResponse.setMessage("Welcome to Ecommerce Multivendor API response object");
        return apiResponse;
    }
}
