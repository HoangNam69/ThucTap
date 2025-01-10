import React, { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import '../../App.css'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer';
import Users from './user_management/Users';
import UserUpdate from './user_management/UserUpdate';

function Admin({ setUsers, users }) {

    const [idUser, setIdUser] = useState('')

    const handleUpdateUser = async (id, userData) => {
        try {
            const response = await fetch(`http://localhost:8080/users/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });

            if (!response.ok) {
                const errorText = await response.text();
                alert("Error: " + errorText);
            } else {
                alert("User updated successfully!");
            }
        } catch (error) {
            console.error("Error updating user:", error);
            alert("An error occurred while updating the user.");
        }
    }

    return (
        <div>
            {/* <Users users={users} setIdUser={setIdUser} /> */}
            {/* <UserUpdate setUsers={setUsers}  users={users} idUser={idUser} /> */}
        </div>
    );
}

export default Admin;