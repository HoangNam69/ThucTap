import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import '../App.css'
import 'boxicons/css/boxicons.min.css';

import Header from './layouts/Header'
import Footer from './layouts/Footer'
import Login from './Login'
import Signup from './Signup'
import AddTodo from './AddTodo'


function TodoApp() {
    return (
        <>
            <Router>
                <Header />
                <Routes>
                    <Route path='/login' element={<Login />} />
                    <Route path='/signup' element={<Signup />} />
                    <Route path='/manage-todo' element={<AddTodo />} />
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