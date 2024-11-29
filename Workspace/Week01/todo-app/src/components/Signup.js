import React, { useState } from "react";
import { Navigate } from "react-router-dom";

function Signup({ setIsAuthenticated }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [redirectToHome, setRedirectToHome] = useState(false);

    const handleSignup = (e) => {
        e.preventDefault();
        // Giả sử đăng ký thành công
        setIsAuthenticated(true);
        setRedirectToHome(true); // Đặt cờ để chuyển hướng
    };

    if (redirectToHome) {
        return <Navigate to="/login" />; // Chuyển hướng về trang chủ
    }

    return (
        <div className="container signup">
            <h2 className="signup-title">Signup Account</h2>
            <form action="" method="get" className="signup-form" onSubmit={handleSignup}>
                <div className="signup-form-group">
                    <label htmlFor="email" className="signup-form-label">
                        Email
                    </label>
                    <input type="email" name="email" id="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter your email" className="form-input" />
                </div>
                <div className="signup-form-group">
                    <label htmlFor="password" className="signup-form-label">
                        Password
                    </label>
                    <input type="password" name="password" id="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Enter your password" className="form-input" />
                </div>
                <div className="signup-form-group">
                    <label htmlFor="confirmPassword" className="signup-form-label">
                        Confirm password
                    </label>
                    <input type="password" name="confirmPassword" id="confirmPassword" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} placeholder="Confirm your password" className="form-input" />
                </div>
                <div className="signup-form-group">
                    <input type="submit" className="btn btn-primary" value="Signup" />
                </div>
            </form>
        </div>
    );
}

export default Signup;