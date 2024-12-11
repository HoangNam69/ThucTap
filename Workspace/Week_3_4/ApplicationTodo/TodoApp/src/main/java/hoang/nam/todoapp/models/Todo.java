/**
 * @ (#) Todo.java 1.0 06-Dec-24
 * <p>
 * Copyright (c) 2024 IUH. All rights reserved.
 */
package hoang.nam.todoapp.models;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;

/**
 * @description:
 * @author: Le Hoang Nam
 * @date: 06-Dec-24
 * @version: 1.0
 */
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "todos")
public class Todo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @NotEmpty(message = "Content is not empty")
    @Column(nullable = false)
    private String content;

    @NotNull(message = "Completed is not null")
    private boolean completed;

    @NotNull(message = "startDate is not null")
    @Column(nullable = false)
    @JsonFormat(pattern = "dd-MM-yyyy")
    @DateTimeFormat(pattern = "dd-MM-yyyy")
    private LocalDate startDate;

    @NotNull(message = "expirationDate is not null")
    @Column(nullable = false)
    @JsonFormat(pattern = "dd-MM-yyyy")
    @DateTimeFormat(pattern = "dd-MM-yyyy")
    private LocalDate expirationDate;

    @NotNull(message = "Status is not null")
    @Enumerated(EnumType.ORDINAL)
    private Status status;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User userId;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public @NotEmpty(message = "Content is not empty") String getContent() {
        return content;
    }

    public void setContent(@NotEmpty(message = "Content is not empty") String content) {
        this.content = content;
    }

    @NotNull(message = "Completed is not null")
    public boolean isCompleted() {
        return completed;
    }

    public void setCompleted(@NotNull(message = "Completed is not null") boolean completed) {
        this.completed = completed;
    }

    public @NotNull(message = "startDate is not null") LocalDate getStartDate() {
        return startDate;
    }

    public void setStartDate(@NotNull(message = "startDate is not null") LocalDate startDate) {
        this.startDate = startDate;
    }

    public @NotNull(message = "expirationDate is not null") LocalDate getExpirationDate() {
        return expirationDate;
    }

    public void setExpirationDate(@NotNull(message = "expirationDate is not null") LocalDate expirationDate) {
        this.expirationDate = expirationDate;
    }

    public @NotNull(message = "Status is not null") Status getStatus() {
        return status;
    }

    public void setStatus(@NotNull(message = "Status is not null") Status status) {
        this.status = status;
    }

    public User getUserId() {
        return userId;
    }

    public void setUserId(User userId) {
        this.userId = userId;
    }
}
