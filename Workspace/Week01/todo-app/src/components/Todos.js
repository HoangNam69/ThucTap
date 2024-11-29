import React from 'react'
import Todo from './Todo'

function Todos(props) {
    const { todos, handleCheckboxChange, handleDelete, setEditingTodo } = props
    return (
        <section className='todos'>
            <h2>List Todos</h2>
            <table>
                <thead>
                    <tr>
                        <td>#</td>
                        <td>Complete</td>
                        <td>Todo</td>
                        <td>Start date</td>
                        <td>Expiration date</td>
                        <td className='thead-action'>Delete</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        todos.map((todo, index) => <Todo key={todo.id} todo={todo} index={index} handleCheckboxChange={handleCheckboxChange} handleDelete={handleDelete} handleEdit={setEditingTodo} />)
                    }
                </tbody>
            </table>
        </section>
    );
}

export default Todos;