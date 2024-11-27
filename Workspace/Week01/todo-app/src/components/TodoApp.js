import React from 'react'
import '../App.css'
import Header from './layouts/Header'
import Footer from './layouts/Footer'
import Login from './Login'

function TodoApp() {
    return (
        <>
            <Header />
            <Login />
            <Footer />
        </>
    );
}

export default TodoApp;