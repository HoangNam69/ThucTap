/**
 * @ (#) TodoService.java 1.0 06-Dec-24
 * <p>
 * Copyright (c) 2024 IUH. All rights reserved.
 */
package hoang.nam.todoapp.services;

import hoang.nam.todoapp.models.Todo;

import java.time.LocalDate;
import java.util.List;

/**
 * @description:
 * @author: Le Hoang Nam
 * @date: 06-Dec-24
 * @version: 1.0
 */
public interface TodoService {
    public void addTodo(Todo todo);

    public List<Todo> findAllTodo();

    public List<Todo> findTodoBetweenStartDateAndExpirationDate(LocalDate startDate, LocalDate expirationDate);

    public List<Todo> findByContent(String content);

    public List<Todo> findByCompleted(Boolean completed);

    public void updateTodo(Integer id, Todo todo);

    public void deleteById(Integer id);
}
