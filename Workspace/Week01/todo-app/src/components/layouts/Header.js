import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function Header() {
    const location = useLocation(); // Lấy thông tin về URL hiện tại để có thể hiển thị các liên kết tương ứng
    return (
        <header className='header container'>
            <h1 className='header-logo'><Link to="/">Todo App</Link></h1>
            <div className='header-action'>
                {location.pathname === '/login' && <Link to='/signup'>SignUp</Link>}
                {location.pathname === '/signup' && <Link to='/login'>Login</Link>}
                {location.pathname === '/' && (
                    <>
                        <Link to='/login'>LogIn</Link>
                        <span>/</span>
                        <Link to='/signup'>SignUp</Link>
                    </>
                )}

            </div>
        </header>
    );
}

export default Header;