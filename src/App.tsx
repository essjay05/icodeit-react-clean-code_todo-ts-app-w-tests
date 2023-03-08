import { FC, useState, ChangeEvent, KeyboardEvent } from 'react';
import { ITodo } from './Interfaces';
import './App.css';
import Todo from './components/Todo';
import TodoList from './components/TodoList';

import { v4 as uuid } from 'uuid';

const App: FC = () => {

  const [todoString, setTodoString] = useState<string>('')
  const [todoList, setTodoList] = useState<ITodo[]>([])

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { target } = event
    if (target) {
      setTodoString(target.value)
    }
  }

  const handleKeydown = (event: KeyboardEvent<HTMLElement>): void => {
    if (event.key === 'Enter') {
      const id = uuid()
      const newTodo = { todoName: todoString, id: id }
      setTodoList([...todoList, newTodo])
      setTodoString('')
    }
  }

  return (
    <div className="App">
      <header>
        <h1>My Todo Application</h1>
        <input
          type='text' 
          placeholder='Task...' 
          name='todo' 
          data-testid='todo-input'
          id='todoInput'
          value={todoString}
          onChange={handleChange} 
          onKeyDown={handleKeydown}/>
      </header>
      {/* <button type="submit">
        Submit
      </button> */}
      {/* <Todo/> */}
      <TodoList todoList={todoList}/>
    </div>
  );
}

export default App;
