/**
 * @ (#) UserRepository.java 1.0 06-Dec-24
 * <p>
 * Copyright (c) 2024 IUH. All rights reserved.
 */
package hoang.nam.todoapp.repositories;

import hoang.nam.todoapp.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * @description:
 * @author: Le Hoang Nam
 * @date: 06-Dec-24
 * @version: 1.0
 */
@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    User findAllById(Integer id);
}
