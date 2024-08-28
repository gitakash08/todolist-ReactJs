import React from 'react'
import TodoCard from './TodoCard'

const TodoList = (props) => {
    const { todolist, handleDeleteTodos } = props
    return (
        <ul className='main'>
            {todolist.map((item, index) => (
                <TodoCard key={index}>
                    <p>{item}</p>
                </TodoCard>
            ))}
        </ul>
    )
}

export default TodoList
