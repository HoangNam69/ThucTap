import React, { useState } from "react";
import { Navigate } from "react-router-dom";

function Login({ setIsAuthenticated, users }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirectToHome, setRedirectToHome] = useState(false);
    
    const handleLogin = (e) => {
        e.preventDefault();
        // Kiểm tra tồn tại email trong database
        const u = users.find(user => user.email === email);
        if (!u) {
            alert("email is not exists!")
        } else if (!u.active) {
            // trạng thái hoạt động của account đang false
            alert('Account is not exists!')
        } else if (u.password !== password) {
            // Password không khớp với database
            alert('password is not correct')
        } else {
            // Khi đã thỏa hết các điều kiện
            /**
             * 1. lấy được user.
             * 2. lưu phiên đăng nhập vào session
             * 3. lấy được danh sách todo của user
             * 4. hiển thị danh sách todo cho user
             */
            setIsAuthenticated(true);
            localStorage.setItem('isAuthenticated', 'true');
            setRedirectToHome(true);
        }
    };

    if (redirectToHome) {
        return <Navigate to="/manage-todo" />; // Chuyển hướng về trang chủ
    }

    return (
        <div className="container login">
            <h2 className="login-title">Login Your Account</h2>
            <form action="" method="get" className="login-form" onSubmit={handleLogin}>
                <div className="login-form-group">
                    <label htmlFor="email" className="login-form-label">
                        Email
                    </label>
                    <input type="email" name="email" id="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter your email" className="form-input" />
                </div>
                <div className="login-form-group">
                    <label htmlFor="password" className="login-form-label">
                        Password
                    </label>
                    <input type="password" name="password" id="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Enter your password" className="form-input" />
                </div>
                <div className="login-form-group login-form-group--action">
                    <div className="remember">
                        <input type="checkbox" name="remember" id="remember" />
                        <label htmlFor="remember">Remember me</label>
                    </div>
                    <a className="forgotPassword" href="#">Forgot password!</a>
                </div>
                <div className="login-form-group">
                    <input type="submit" className="btn btn-primary" value="Login" />
                </div>
            </form>
        </div>
    );
}

export default Login;