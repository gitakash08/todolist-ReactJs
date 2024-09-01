import { useState, useEffect } from 'react'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'


function App() {

  const [todolist, settodolist] = useState([])
  const [todoValue, settodoValue] = useState('')

  const persistData = (newlist) => {
    localStorage.setItem('todolist', JSON.stringify({ todolist: newlist }))
  }

  const handleAddTodos = (newtodos) => {
    const newToDoList = [...todolist, newtodos]
    persistData(newToDoList)
    settodolist(newToDoList)
  }

  const handleDeleteTodos = (index) => {
    const newToDoList = todolist.filter((todo, todoIndexs) => {
      return todoIndexs != index
    })
    persistData(newToDoList)
    settodolist(newToDoList)
  }

  const handleEditTodos = (index) => {
    const valueTobeEdited = todolist[index]
    settodoValue(valueTobeEdited)
    handleDeleteTodos(index)
  }

  useEffect(() => {
    if (!localStorage) {
      return
    }
    let localtodos = localStorage.getItem('todolist')
    if (!localtodos) {
      return
    }
    localtodos = JSON.parse(localtodos).todolist
    settodolist(localtodos)
  }, [])

  return (
    <>
      <TodoInput todoValue={todoValue} settodoValue={settodoValue}
        handleAddTodos={handleAddTodos} />
      <TodoList handleEditTodos={handleEditTodos} handleDeleteTodos={handleDeleteTodos} todolist={todolist} />
    </>
  )
}

export default App
