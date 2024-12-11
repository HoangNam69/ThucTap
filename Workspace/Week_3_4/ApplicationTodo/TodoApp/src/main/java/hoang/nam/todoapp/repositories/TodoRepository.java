/**
 * @ (#) TodoRepository.java 1.0 06-Dec-24
 * <p>
 * Copyright (c) 2024 IUH. All rights reserved.
 */
package hoang.nam.todoapp.repositories;

import hoang.nam.todoapp.models.Todo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

/**
 * @description:
 * @author: Le Hoang Nam
 * @date: 06-Dec-24
 * @version: 1.0
 */
@Repository
public interface TodoRepository extends JpaRepository<Todo, Integer> {
    @Query(value = "SELECT .* \n" +
            "FROM todos \n" +
            "WHERE start_date >= :startDate \n" +
            "AND expiration_date <= :expirationDate", nativeQuery = true)
    List<Todo> findTodoBetweenStartDateAndExpirationDate(LocalDate startDate, LocalDate expirationDate);

    List<Todo> findByContent(String content);

    List<Todo> findByCompleted(Boolean completed);
}
