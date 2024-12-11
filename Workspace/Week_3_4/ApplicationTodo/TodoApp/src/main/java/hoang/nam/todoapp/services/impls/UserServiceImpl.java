/**
 * @ (#) UserServiceImpl.java 1.0 06-Dec-24
 * <p>
 * Copyright (c) 2024 IUH. All rights reserved.
 */
package hoang.nam.todoapp.services.impls;

import hoang.nam.todoapp.models.User;
import hoang.nam.todoapp.repositories.UserRepository;
import hoang.nam.todoapp.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @description:
 * @author: Le Hoang Nam
 * @date: 06-Dec-24
 * @version: 1.0
 */
@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public void addUser(User user) {
        userRepository.save(user);
    }

    @Override
    public List<User> findAllUser() {
        return userRepository.findAll();
    }

    @Override
    public User findUserById(Integer id) {
        return userRepository.findAllById(id);
    }


    @Override
    public void updateUser(Integer id, User user) {
        User existsUser = userRepository.findAllById(id);
        if (existsUser != null) {
            userRepository.save(user);
        }
    }
}
