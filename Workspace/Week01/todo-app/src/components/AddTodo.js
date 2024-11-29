import React, { useState } from 'react'

function AddTodo(props) {
    const [content, setContent] = useState("")
    const [startDate, setStartDate] = useState("")
    const [expirationDate, setExpirationDate] = useState("")

    const inputContentChange = e => {
        e.preventDefault();
        setContent(e.target.value)
    }

    const inputStartDateChange = e => {
        e.preventDefault();
        setStartDate(e.target.value)
    }

    const inputExpirationDateChange = e => {
        e.preventDefault();
        setExpirationDate(e.target.value)
    }

    const addNewTodo = e => {
        e.preventDefault();
        const newToDo = {
            content: content,
            startDate: startDate,
            expirationDate: expirationDate,
        }
        props.addTodo(newToDo)
        setContent("")
        setExpirationDate("")
        setStartDate("")
    }

    return (

        <form action='' method='' className='add-todo__form' onSubmit={addNewTodo}>
            <h2 className='add-title'>Add New Todo</h2>
            <div className='add-todo__form-group'>
                <label htmlFor='content'>Add your todo:</label>
                <input type='text' name='' id='content' value={content} className='form-input form-input--add-todo ' placeholder='Enter your todo' onChange={inputContentChange} />
            </div>
            <div className='add-todo__form-group'>
                <label>Start date:</label>
                <input type='date' name='startDate' value={startDate} className='form-input form-input--add-todo ' onChange={inputStartDateChange} />
            </div>
            <div className='add-todo__form-group'>
                <label>Expiration date:</label>
                <input type='date' name='expirationDate' value={expirationDate} className='form-input form-input--add-todo ' onChange={inputExpirationDateChange} />
            </div>
            <div className='add-todo__form-group'>
                <input type='submit' value="Add New" className='btn btn-primary' />
            </div>
        </form>
    );
}

export default AddTodo;