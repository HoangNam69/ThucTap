/**
 * @ (#) User.java 1.0 06-Dec-24
 * <p>
 * Copyright (c) 2024 IUH. All rights reserved.
 */
package hoang.nam.todoapp.models;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.*;

import java.util.Set;

/**
 * @description:
 * @author: Le Hoang Nam
 * @date: 06-Dec-24
 * @version: 1.0
 */
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @NotNull(message = "Email is not null")
    @NotEmpty(message = "Email is not empty")
    private String email;


    @NotEmpty(message = "Password is not empty")
    @Size(min = 8, max = 25, message = "Password length: >= 8 && <= 25 chracter!")
    private String password;

    @Column(nullable = false)
    private Boolean active;

    @OneToMany(mappedBy = "userId", cascade = CascadeType.ALL)
    private Set<Todo> todos;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public @NotNull(message = "Email is not null") @NotEmpty(message = "Email is not empty") String getEmail() {
        return email;
    }

    public void setEmail(@NotNull(message = "Email is not null") @NotEmpty(message = "Email is not empty") String email) {
        this.email = email;
    }

    public @NotEmpty(message = "Password is not empty") @Size(min = 8, max = 25, message = "Password length: >= 8 && <= 25 chracter!") String getPassword() {
        return password;
    }

    public void setPassword(@NotEmpty(message = "Password is not empty") @Size(min = 8, max = 25, message = "Password length: >= 8 && <= 25 chracter!") String password) {
        this.password = password;
    }

    public Boolean getActive() {
        return active;
    }

    public void setActive(Boolean active) {
        this.active = active;
    }
}
