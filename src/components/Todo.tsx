import { useState, ChangeEvent, KeyboardEvent } from 'react'
import TodoList from './TodoList'
import { v4 as uuid } from 'uuid'

interface Todo {
  todo: String,
  id: String
}

interface TodosArr {
  todos: Todo[]
}

function Todo() {

  let todos: Object[]
  todos = []

  const [todoString, setTodoString] = useState('')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event
    if (target) {
      setTodoString(target.value)
    }
  }

  const handleKeydown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Enter') {
      const id = uuid()
      todos.push({
        todoStr: todoString,
        tId: id!
      })
      
    }
  }

  return (
    <div>
      <input type='text' data-testid='todo-input' onChange={handleChange} onKeyDown={handleKeydown}/>
      <TodoList todosArr={todos}/>
    </div>
  )
}

export default Todo