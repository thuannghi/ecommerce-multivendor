package com.nnt.service;

import com.nnt.request.LoginRequest;
import com.nnt.response.AuthResponse;
import com.nnt.response.SignupRequest;

public interface AuthService {

    String createUser(SignupRequest req) throws Exception;

    void sendLoginOtp(String email) throws Exception;

    AuthResponse signing(LoginRequest req);

}
