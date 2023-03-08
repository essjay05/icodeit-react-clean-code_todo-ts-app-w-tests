import { useEffect } from 'react'
import { ITodo, ITodoList } from '../Interfaces'

interface TodoListProps {
  todoList?: ITodo[]
}

function TodoList({ todoList }: TodoListProps ) {

  if (!todoList?.length) {
    return(<div>
      <h2>No Todos found</h2>
    </div>)
  }

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todoList.map((t: ITodo, key: number) => {
          const { todoName, id } = {...t}
          return(
            <li key={key}
              data-testid={id}>
              {todoName}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default TodoList