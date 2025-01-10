import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid'

function Signup({ setIsAuthenticated, users, setUsers, signup }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [redirectToHome, setRedirectToHome] = useState(false);

    const handleSignup = async (e) => {
        e.preventDefault();

        // Kiểm tra tồn tại email trong database
        const u = users.find(user => user.email === email)

        if (u) {
            // Email đã tồn tại
            alert("Email is exists!")
        } else if (password !== confirmPassword) {
            // Password và confirm password không trùng
            alert("password is no match!")
        } else {
            // Thỏa các điều kiện -> thực hiện thêm mới user
            // Khởi tạo user mới và gán dữ liệu cho từ useState cho user
            try {
                // Tạo user mới
                const newUser = {
                    email: email,
                    password: password,
                    active: true
                };

                // Gửi yêu cầu POST đến backend
                const response = await fetch('http://localhost:8080/users', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(newUser)
                });

                if (response.ok) {
                    const createdUser = await response.json();
                    setUsers([...users, createdUser]); // Cập nhật danh sách users
                    alert("Signup successful!");
                    setRedirectToHome(true); // Chuyển hướng đến trang login
                } else {
                    const errors = await response.json();
                    alert(errors.join("\n"));
                }
            } catch (error) {
                console.error("Error during signup:", error);
                alert("An error occurred while signing up.");
            }
        }
    };

    if (redirectToHome) {
        return <Navigate to="/login" />; // Chuyển hướng về trang chủ
    }

    return (
        <div className="container signup">
            <h2 className="signup-title">Signup Account</h2>
            <form action="http://localhost:3000/" method="post" className="signup-form" onSubmit={handleSignup}>
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