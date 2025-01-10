import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function Header({ isAuthenticated, logout }) {
    const location = useLocation(); // Lấy thông tin về URL hiện tại để có thể hiển thị các liên kết tương ứng
    return (
        <header className='header container'>
            <h1 className='header-logo'><Link to="/">Todo App</Link></h1>
            <div className='header-action'>
                {location.pathname === '/login' && <Link to='/signup'>SignUp</Link>}
                {location.pathname === '/signup' && <Link to='/login'>Login</Link>}
                {location.pathname === '/manage-todo'
                    &&
                    <div>
                        <Link to='/manage-todo' className='action-icon-user'>
                            <i className='bx bxs-user-circle' />
                        </Link>
                        <div className='header-action__account'>
                            <ul>
                                <a onClick={logout}>Log out</a>
                            </ul>
                        </div>
                    </div>
                }

                {(location.pathname === '/' && isAuthenticated === true) && (
                    <div>
                        <Link to='/manage-todo' className='action-icon-user'>
                            <i className='bx bxs-user-circle' />
                        </Link>
                        <div className='header-action__account'>
                            <ul>
                                <a onClick={logout}>Log out</a>
                            </ul>
                        </div>
                    </div>
                )}

                {(location.pathname === '/' && isAuthenticated !== true) && (
                    <>
                        <Link to='/login'>LogIn</Link>
                        <span>/</span>
                        <Link to='/signup'>SignUp</Link>
                        <Link to='/admin'>Admin Page</Link>
                    </>
                )}
            </div>
        </header>
    );
}

export default Header;