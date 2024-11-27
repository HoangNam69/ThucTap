import React from 'react'

function Header() {
    return (
        <header className='header container'>
            <h1 className='header-logo'>Todo App</h1>
            <div className='header-action'>
                <a href='#'>LogIn</a><span>/</span><a href='#'>SignUp</a>
            </div>
        </header>
    );
}

export default Header;