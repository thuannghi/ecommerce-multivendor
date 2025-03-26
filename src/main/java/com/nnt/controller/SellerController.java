package com.nnt.controller;

import com.nnt.model.VerificationCode;
import com.nnt.repository.VerificationCodeRepository;
import com.nnt.request.LoginRequest;
import com.nnt.response.ApiResponse;
import com.nnt.response.AuthResponse;
import com.nnt.service.AuthService;
import com.nnt.service.SellerService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/sellers")
public class SellerController {

    private final SellerService sellerService;

    private final AuthService authService;

    private final VerificationCodeRepository verificationCodeRepository;

    @PostMapping("/login")
    public ResponseEntity<AuthResponse> loginSeller(@RequestBody LoginRequest req) throws Exception {
        String otp = req.getOtp();
        String email = req.getEmail();

//        VerificationCode verificationCode = verificationCodeRepository.findByEmail(email);
//        if (verificationCode == null || !verificationCode.getOtp().equals(req.getOtp())) {
//            throw new Exception("Wrong otp...");
//        }

        req.setEmail("seller_" + email);
        AuthResponse authResponse = authService.signing(req);

        return ResponseEntity.ok(authResponse);
    }
}
