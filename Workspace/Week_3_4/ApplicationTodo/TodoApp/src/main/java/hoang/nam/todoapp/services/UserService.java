/**
 * @ (#) UserService.java 1.0 06-Dec-24
 * <p>
 * Copyright (c) 2024 IUH. All rights reserved.
 */
package hoang.nam.todoapp.services;

import hoang.nam.todoapp.models.User;

import java.util.List;

/**
 * @description:
 * @author: Le Hoang Nam
 * @date: 06-Dec-24
 * @version: 1.0
 */
public interface UserService {
    public void addUser(User user);

    public List<User> findAllUser();

    public User findUserById(Integer id);

    public void updateUser(Integer id, User user);
}
