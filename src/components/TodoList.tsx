import React from 'react'

interface Todo {
  todo: String,
  id: String | null
}

interface TodoListProps {
  todosArr: Todo[]
}

function TodoList({todosArr}: TodoListProps) {

  if (!todosArr?.length) {
    return(<div>
      <h2>No Todos found</h2>
    </div>)
  }

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todosArr.map((t) => {
          const tItem: Todo = {
            todo: t.todo,
            id: t.id!
          }
          return(
            <li key={tItem.id}>
              {tItem.todo}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default TodoList