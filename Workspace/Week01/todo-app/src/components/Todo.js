import React from "react";

function Todo(props) {
    const { todo, index, handleCheckboxChange, handleDelete, handleEdit } = props
    const { id, content, startDate, expirationDate, completed, status } = todo
    return (
        <tr>
            <td>{index}</td>
            <td>
                <input type='checkbox' name='completed' checked={completed} onChange={() => handleCheckboxChange(id)} />
            </td>
            <td>{content}</td>
            <td>{startDate}</td>
            <td>{expirationDate}</td>
            <td className='tbody-action'>
                {/* <button className='bx bxs-edit' onClick={() => handleEdit(todo)}></button>
                <span>/</span> */}
                <button onClick={() => {
                    handleDelete(id)
                }} className='bx bx-message-square-x'></button>
            </td>
        </tr>
    );
}

export default Todo;