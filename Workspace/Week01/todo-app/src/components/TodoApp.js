import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom'
import '../App.css'
import 'boxicons/css/boxicons.min.css';
import { v4 as uuidv4 } from 'uuid'

import Header from './layouts/Header'
import Footer from './layouts/Footer'
import Login from './Login'
import Signup from './Signup'
import AddTodo from './AddTodo'
import Todos from './Todos'


function TodoApp() {

    const [state, setState] = useState({
        todos: [{
            id: 1,
            content: "My important todo 1",
            startDate: '24/12/2024',
            expirationDate: '01/01/2024',
            completed: true,
            status: 'success'
        }, {
            id: 2,
            content: "My important todo 2",
            startDate: '02/12/2024',
            expirationDate: '30/01/2024',
            completed: false,
            status: 'late'
        }, {
            id: 3,
            content: "My important todo 3",
            startDate: '12/12/2024',
            expirationDate: '20/01/2024',
            completed: true,
            status: 'success'
        }, {
            id: 4,
            content: "My important todo 4",
            startDate: '28/12/2024',
            expirationDate: '31/01/2024',
            completed: false,
            status: 'doing'
        }]
    })
    const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem('isAuthenticated') === 'true');
    const [editingTodo, setEditingTodo] = useState(null);

    const [users, setUsers] = useState([{
        id: 1,
        email: "lehoangnam.31123@gmail.com",
        password: "123456",
        isActive: true
    }])


    const handleCheckboxChange = (id) => {
        setState({
            todos: state.todos.map((todo) => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        })
    }

    const handleDelete = (id) => {
        const check = window.confirm("Bạn có chắc chắn xóa todo này?");

        if (check) {
            setState({
                todos: [...state.todos.filter(todo => todo.id !== id)]
            })
        }
    }

    const addTodo = (todo) => {
        const newToDo = {
            id: uuidv4(),
            content: todo.content,
            startDate: todo.startDate,
            expirationDate: todo.expirationDate,
            completed: false,
            status: "todo"
        }

        setState({
            todos: [...state.todos, newToDo]
        })
    }

    const logout = () => {
        setIsAuthenticated(false);
        localStorage.removeItem('isAuthenticated'); // Xóa trạng thái đăng nhập khỏi localStorage
    }

    useEffect(() => {
        localStorage.setItem('isAuthenticated', isAuthenticated); // Lưu trạng thái đăng nhập vào localStorage
    }, [isAuthenticated]);


    const updateTodo = (updatedTodo) => {
        setState({
            todos: state.todos.map((todo) =>
                todo.id === updatedTodo.id ? updatedTodo : todo
            )
        });
        setEditingTodo(null); // Sau khi chỉnh sửa, đặt lại trạng thái
    };


    const signup = (user) => {
        const newUser = {
            id: uuidv4(),
            email: user.email,
            password: user.password,
            isActive: true
        }

        setUsers([
            ...users, newUser
        ])
    }

    return (
        <>
            <Router>
                <Header isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} logout={logout} />

                <Routes>
                    <Route path='/login' element={<Login users={users} setIsAuthenticated={setIsAuthenticated} />} />
                    <Route path='/signup' element={<Signup users={users} setUsers={setUsers} setIsAuthenticated={setIsAuthenticated} signup={signup} />} />
                    <Route path='/manage-todo' element={
                        isAuthenticated ? (
                            <div className="add-todo container">
                                <AddTodo addTodo={addTodo} updateTodo={updateTodo} />
                                <Todos
                                    todos={state.todos}
                                    handleCheckboxChange={handleCheckboxChange}
                                    handleDelete={handleDelete}
                                    setEditingTodo={setEditingTodo}
                                />
                            </div>
                        ) : (
                            <Navigate to="/login" />
                        )
                    } />
                    <Route path='/' element={
                        <div className='sologan'>
                            <span>Welcome to Todo App</span>
                            <Link to='/manage-todo'>Manage Your Todos</Link>
                        </div>
                    } />
                </Routes>
                <Footer />
            </Router>
        </>
    );
}



export default TodoApp;