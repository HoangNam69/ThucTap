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
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

/**
 * @description:
 * @author: Le Hoang Nam
 * @date: 06-Dec-24
 * @version: 1.0
 */
@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "http://localhost:3000")
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
    public ResponseEntity<?> addNewUser(@Valid @RequestBody User user, BindingResult rs) {

        if (rs.hasErrors()) {
            List<String> errors = rs.getAllErrors().stream()
                    .map(er -> er.getDefaultMessage())
                    .collect(Collectors.toList());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errors);
        }
        userService.addUser(user);
        return ResponseEntity.ok(user);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateUser(@PathVariable Integer id, @Valid @RequestBody User user, BindingResult rs) {
        if (rs.hasErrors()) {
            List<String> errors = rs.getAllErrors().stream()
                    .map(er -> er.getDefaultMessage())
                    .collect(Collectors.toList());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errors);
        }

// Kiểm tra tồn tại user
        try {
            User u = userService.findUserById(id);
            User updateUser = new User();
            updateUser.setActive(user.getActive());
            updateUser.setEmail(user.getEmail());
            updateUser.setPassword(user.getPassword());
            userService.updateUser(id, updateUser);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found with ID: " + id);
        }
        return ResponseEntity.ok("User updated successfully!");
    }

}
