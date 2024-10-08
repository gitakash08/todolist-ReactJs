import React from 'react'
import TodoCard from './TodoCard'

const TodoList = (props) => {
    const { todolist } = props
    return (
        <ul className='main'>
            {todolist.map((item, todoIndex) => (
                <TodoCard {...props} index={todoIndex} key={todoIndex}>
                    <p>{item}</p>
                </TodoCard>
            ))}
        </ul>
    )
}

export default TodoList
