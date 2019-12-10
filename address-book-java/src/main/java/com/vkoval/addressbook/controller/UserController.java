package com.vkoval.addressbook.controller;

import com.vkoval.addressbook.dao.UserRepository;
import com.vkoval.addressbook.entity.user.Role;
import com.vkoval.addressbook.entity.user.User;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
    private UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @PostMapping("/admins")
    public String postAdmin(@RequestBody User user) {
        if (user == null || StringUtils.isEmpty(user.getLogin())) {
            return "Пустой запрос";
        }
        if (StringUtils.isEmpty(user.getPassword())) {
            return "Пароль не может быть пустым";
        }
        user.setRole(Role.ADMIN);
        userRepository.save(user);
        return null;
    }
}
