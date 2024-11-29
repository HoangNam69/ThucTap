import React, { useState, useEffect } from 'react'

function AddTodo({ addTodo, editingTodo, updateTodo }) {
    const [todo, setTodo] = useState({
        content: '',
        startDate: '',
        expirationDate: ''
    });


    // Khi editingTodo thay đổi, cập nhật form với dữ liệu của nó
    useEffect(() => {
        if (editingTodo) {
            setTodo(editingTodo);
        } else {
            setTodo({ content: '', startDate: '', expirationDate: '' });
        }
    }, [editingTodo]);

    const handleChange = e => {
        const { name, value } = e.target;
        setTodo({ ...todo, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editingTodo) {
            updateTodo(todo); // Gọi hàm cập nhật
        } else {
            addTodo(todo); // Gọi hàm thêm mới
        }
        setTodo({ content: '', startDate: '', expirationDate: '' }); // Reset form
    };

    return (

        <form action='' method='' className='add-todo__form' onSubmit={handleSubmit}>
            {/* {editingTodo ? 'Update Todo' : 'Add New Todo'} */}
            <h2 className='add-title'>Add New Todo</h2>
            <div className='add-todo__form-group'>
                <label htmlFor='content'>Add your todo:</label>
                <input type='text' name='content' id='content' value={todo.content} className='form-input form-input--add-todo ' placeholder='Enter your todo' onChange={e => handleChange(e)} />
            </div>
            <div className='add-todo__form-group'>
                <label>Start date:</label>
                <input type='date' name='startDate' className='form-input form-input--add-todo ' value={todo.startDate}
                    onChange={e => handleChange(e)} />
            </div>
            <div className='add-todo__form-group'>
                <label>Expiration date:</label>
                <input type='date' name='expirationDate' className='form-input form-input--add-todo ' value={todo.expirationDate}
                    onChange={e => handleChange(e)} />
            </div>
            <div className='add-todo__form-group'>
                <input type='submit' value={editingTodo ? 'Update' : 'Add New'} className='btn btn-primary' />
            </div>
        </form>
    );
}

export default AddTodo;