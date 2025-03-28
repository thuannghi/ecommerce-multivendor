package com.nnt.service;

import com.nnt.domain.USER_ROLE;
import com.nnt.request.LoginRequest;
import com.nnt.response.AuthResponse;
import com.nnt.response.SignupRequest;

public interface AuthService {

    String createUser(SignupRequest req) throws Exception;

    void sendLoginOtp(String email, USER_ROLE role) throws Exception;

    AuthResponse signing(LoginRequest req) throws Exception;

}
