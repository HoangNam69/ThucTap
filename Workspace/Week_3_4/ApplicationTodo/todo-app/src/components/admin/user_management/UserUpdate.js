import React, { useState } from 'react'

function UserUpdate({ setUsers, users, idUser }) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const user = users.find(u => u.id === idUser)

    // Hiển thị giá trị của user cần cập nhật thông tin nếu có tồn tại user
    if (user) {
        setEmail(user.email)
        setPassword(user.password)
        setConfirmPassword(user.password)
    } else {
        alert("User is not exists!")
    }



    const handleUpdateUser = async (idUser) => {

        if (!user) {
            // User không tồn tại
            alert("password is no match!")
        } else if (password !== confirmPassword) {
            // Password và confirm password không trùng
            alert("password is no match!")
        } else {
            // Thỏa các điều kiện -> thực hiện update user
            // Khởi tạo user mới và gán dữ liệu cho từ useState cho user
            try {
                // Gán giá trị thay đổi từ useState
                const userUpdate = {
                    email: email,
                    password: password,
                    active: user.active
                };

                // Gửi yêu cầu PUT đến backend
                const response = await fetch(`http://localhost:8080/users/${idUser}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(userUpdate)
                });

                if (response.ok) {
                    const createdUser = await response.json();
                    setUsers([...users, createdUser]); // Cập nhật danh sách users
                    alert("Signup successful!");
                } else if (!response.ok) {
                    const errorText = await response.text();
                    alert("Error: " + errorText);
                }
            } catch (error) {
                console.error("Error during signup:", error);
                alert("An error occurred while signing up.");
            }
        }
    }

    return (
        <div className="container user-update">
            <h2 className="user-update-title">Update Account</h2>
            <form className="update-form" onSubmit={handleUpdateUser(idUser)}>
                <div className="update-form-group">
                    <label htmlFor="email" className="update-form-label">
                        Email
                    </label>
                    <input type="email" name="email" id="email" value={email} onChange={e => setEmail(e.target.value)} className="form-input" />
                </div>
                <div className="update-form-group">
                    <label htmlFor="password" className="update-form-label">
                        Password
                    </label>
                    <input type="password" name="password" id="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Enter your password" className="form-input" />
                </div>
                <div className="update-form-group">
                    <label htmlFor="confirmPassword" className="update-form-label">
                        Confirm password
                    </label>
                    <input type="password" name="confirmPassword" id="confirmPassword" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} placeholder="Confirm your password" className="form-input" />
                </div>
                <div className="update-form-group">
                    <input type="submit" className="btn btn-primary" value="Update" />
                </div>
            </form>
        </div>
    );
}

export default UserUpdate;