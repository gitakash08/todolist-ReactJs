import React, { useState } from 'react'

const TodoInput = (props) => {
  const { handleAddTodos } = props;
  const [todoValue, settodoValue] = useState('')
  return (
    <header>
      <input value={todoValue} onChange={(e) => { settodoValue(e.target.value) }} placeholder='Enter ToDos ...' />
      <button onClick={() => { handleAddTodos(todoValue) 
      settodoValue('')}}>Add</button>
    </header>
  )
}

export default TodoInput
