import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
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
            todos:[...state.todos, newToDo]
        })
    }

    return (
        <>
            <Router>
                <Header />

                <Routes>
                    <Route path='/login' element={<Login />} />
                    <Route path='/signup' element={<Signup />} />
                    <Route path='/manage-todo' element={
                        <div className='add-todo container'>
                            <AddTodo addTodo={addTodo} />
                            <Todos todos={state.todos} handleCheckboxChange={handleCheckboxChange} handleDelete={handleDelete} />
                        </div>
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