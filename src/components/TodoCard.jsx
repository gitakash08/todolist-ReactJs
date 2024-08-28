import React from 'react'

const TodoCard = (props) => {
    const { children } = props

    return (
        <li className='todoItem'>
            {children}
            <div className='actionsContainer'>
                <i class="fa-solid fa-pen-to-square"></i>
                <i class="fa-solid fa-trash"></i>
            </div>
        </li>
    )
}

export default TodoCard
