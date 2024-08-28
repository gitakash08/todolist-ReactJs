import { useState } from 'react'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'


function App() {

  const [todolist, settodolist] = useState([])

  const handleAddTodos = (newtodos) => {
    const newToDoList = [...todolist, newtodos]
    settodolist(newToDoList)
  }

  const handleDeleteTodos = (index) => {
    const newToDoList = todolist.filter((todo, todoIndex) => {
      todoIndex != index
    })
    settodolist(newToDoList)
  }

  const handleEditTodos = (index) => {

  }

  return (
    <>
      <TodoInput handleAddTodos={handleAddTodos} />
      <TodoList handleDeleteTodos={handleDeleteTodos} todolist={todolist} />
    </>
  )
}

export default App
