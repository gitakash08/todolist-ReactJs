import React from 'react'
import TodoCard from './TodoCard'

const TodoList = () => {
    const todolist = [
        "Go to the gym",
        "Eat more furits and vege",
        "Clean code and Faster",
        "Hello world from JS"
    ]
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
