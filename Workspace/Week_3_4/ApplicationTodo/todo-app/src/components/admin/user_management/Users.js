import React from "react";

function UserManagement({users, setIdUser}) {

    return (<div className='container admin'>
        <div className='side-bar'>
            <h2>Management</h2>
            <ul>
                <li><a href="#">Users</a></li>
            </ul>
        </div>
        <div className='management'>
            <h2>Users List Management</h2>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Id</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Active</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {users.length > 0 ? (
                        users.map((e, index) => {
                            return (
                                <tr key={e.id}>
                                    <td>{index}</td>
                                    <td>{e.id}</td>
                                    <td>{e.email}</td>
                                    <td>{e.password}</td>
                                    <td>{e.active ? "Active" : "No active"}</td>
                                    <td><button onClick={() => setIdUser(e.id)} className='bx bx-message-square-x'></button></td>
                                </tr>
                            );
                        })) : (<tr><td colSpan="5">No item</td></tr>)}
                </tbody>
            </table>
        </div>
    </div>
    );
}

export default UserManagement;