package com.burucs.server.controller;

import com.burucs.server.model.User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;
import java.util.Arrays;

@RestController
@RequestMapping("/api")
public class UserController {
    public UserController() {}

    @GetMapping("/user")
    public List<User> getUsers() {
        return Arrays.asList(
                new User(1L, "johndoe", false),
                new User(2L, "marymerkov", false)
        );
    }
}

