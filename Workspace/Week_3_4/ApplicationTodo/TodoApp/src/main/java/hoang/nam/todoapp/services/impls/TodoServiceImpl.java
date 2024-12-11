/**
 * @ (#) TodoServiceImpl.java 1.0 06-Dec-24
 * <p>
 * Copyright (c) 2024 IUH. All rights reserved.
 */
package hoang.nam.todoapp.services.impls;

import hoang.nam.todoapp.models.Todo;
import hoang.nam.todoapp.repositories.TodoRepository;
import hoang.nam.todoapp.services.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

/**
 * @description:
 * @author: Le Hoang Nam
 * @date: 06-Dec-24
 * @version: 1.0
 */
@Service
public class TodoServiceImpl implements TodoService {

    @Autowired
    private TodoRepository todoRepository;

    @Override
    public void addTodo(Todo todo) {
        todoRepository.save(todo);
    }

    @Override
    public List<Todo> findAllTodo() {
        return todoRepository.findAll();
    }

    @Override
    public List<Todo> findTodoBetweenStartDateAndExpirationDate(LocalDate startDate, LocalDate expirationDate) {
        return todoRepository.findTodoBetweenStartDateAndExpirationDate(startDate, expirationDate);
    }

    @Override
    public List<Todo> findByContent(String content) {
        return todoRepository.findByContent(content);
    }

    @Override
    public List<Todo> findByCompleted(Boolean completed) {
        return todoRepository.findByCompleted(completed);
    }


    @Override
    public void updateTodo(Integer id, Todo todo) {
        Todo existsTodo = todoRepository.findById(id).get();
        if (existsTodo != null) {
            todoRepository.save(todo);
        }

    }

    @Override
    public void deleteById(Integer id) {
        todoRepository.deleteById(id);
    }
}
