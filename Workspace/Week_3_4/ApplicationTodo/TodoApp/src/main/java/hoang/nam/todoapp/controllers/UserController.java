/**
 * @ (#) UserController.java 1.0 06-Dec-24
 * <p>
 * Copyright (c) 2024 IUH. All rights reserved.
 */
package hoang.nam.todoapp.controllers;

import hoang.nam.todoapp.models.User;
import hoang.nam.todoapp.services.UserService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * @description:
 * @author: Le Hoang Nam
 * @date: 06-Dec-24
 * @version: 1.0
 */
@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping(value = "")
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> users = userService.findAllUser();
        for (User user : users) {
            System.out.println(user.getEmail());
        }
        return ResponseEntity.ok(users);
    }

    @PostMapping("")
    public ResponseEntity<String> addNewUser(@Valid @ModelAttribute User user) {
        userService.addUser(user);
        return ResponseEntity.ok("Add successfull");
    }


}
