package com.vkoval.addressbook.controller;

import lombok.extern.java.Log;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Log
public class AuthController {

    @GetMapping("/auth")
    public Authentication authenticate(Authentication authentication) {
        if (!(authentication instanceof AnonymousAuthenticationToken)) {
            log.info("User authenticated");
            return authentication;
        }
        return null;
    }
}
