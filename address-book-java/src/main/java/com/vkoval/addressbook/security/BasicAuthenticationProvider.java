package com.vkoval.addressbook.security;

import com.vkoval.addressbook.dao.UserRepository;
import com.vkoval.addressbook.entity.user.User;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.Collections;

public class BasicAuthenticationProvider implements AuthenticationProvider {
    UserRepository userRepository;

    public BasicAuthenticationProvider(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping(path = "/auth")
    public Authentication authenticate(Authentication authentication) {
        String username = authentication.getName();
        String password = authentication.getCredentials().toString();

        User user = userRepository.findByLogin(username);
        if (user == null) {
            throw new UsernameNotFoundException("User not found");
        }
        if (!user.getPassword().equals(password)) {
            throw new BadCredentialsException("Invalid password");
        }
        return new UsernamePasswordAuthenticationToken(username, password, Collections.singleton(user.getRole()));
    }

    @Override
    public boolean supports(Class<?> aClass) {
        return aClass.equals(UsernamePasswordAuthenticationToken.class);
    }
}