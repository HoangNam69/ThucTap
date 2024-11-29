import React from 'react'

function AddTodo() {
    return (
        <div className='add-todo container'>
            <form action='' method='post' className='add-todo__form'>
                <h2 className='add-title'>Add New Todo</h2>
                <div className='add-todo__form-group'>
                    <label htmlFor='content'>Add your todo:</label>
                    <input type='text' name='' id='content' className='form-input form-input--add-todo ' placeholder='Enter your todo' />
                </div>
                <div className='add-todo__form-group'>
                    <label>Start date:</label>
                    <input type='date' name='startDate' className='form-input form-input--add-todo ' />
                </div>
                <div className='add-todo__form-group'>
                    <label>Expiration date:</label>
                    <input type='date' name='expirationDate' className='form-input form-input--add-todo ' />
                </div>
                <div className='add-todo__form-group'>
                    <input type='submit' value="Add New" className='btn btn-primary' />
                </div>
            </form>
            <section className='todos'>
                <h2>List Todos</h2>
                <table>
                    <thead>
                        <tr>
                            <td>#</td>
                            <td>Status</td>
                            <td>Todo</td>
                            <td>Start date</td>
                            <td>Expiration date</td>
                            <td className='thead-action'>Edit or Delete</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>0</td>
                            <td>
                                <input type='checkbox' name='statusTodo' />
                            </td>
                            <td>My important todo</td>
                            <td>24/12/2024</td>
                            <td>01/01/2025</td>
                            <td className='tbody-action'>
                                <a href='' className='bx bxs-edit'></a>
                                <span>/</span>
                                <a href='' className='bx bx-message-square-x'></a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
    );
}

export default AddTodo;