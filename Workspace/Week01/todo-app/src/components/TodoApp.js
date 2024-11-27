import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import '../App.css'
import Header from './layouts/Header'
import Footer from './layouts/Footer'
import Login from './Login'
import Signup from './Signup'

function TodoApp() {
    return (
        <>
            <Router>
                <Header />
                <Routes>
                    <Route path='/login' element={<Login />} />
                    <Route path='/signup' element={<Signup />} />
                    <Route path='/' element={<div className='sologan'>Welcome to Todo App</div>} />
                </Routes>
                <Footer />
            </Router>
        </>
    );
}

export default TodoApp;