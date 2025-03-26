package com.nnt.service.impl;

import com.nnt.config.JWTProvider;
import com.nnt.model.User;
import com.nnt.repository.UserRepository;
import com.nnt.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class UserServiceImplp implements UserService {

    private final UserRepository userRepository;

    private final JWTProvider jwtProvider;

    @Override
    public User findUserByJwtToken(String jwt) throws Exception {
        String email = jwtProvider.getEmailFromJWTToken(jwt);
        return this.findUserByEmail(email);
    }

    @Override
    public User findUserByEmail(String email) throws Exception {
        User user = userRepository.findByEmail(email);
        if (user == null) {
            throw new Exception("User was not found with email - " + email);
        }
        return user;
    }
}
