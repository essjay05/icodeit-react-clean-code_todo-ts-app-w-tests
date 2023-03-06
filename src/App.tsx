import React from 'react';
import './App.css';
import Todo from './components/Todo';

function App() {

  let todos: String[]
  todos = []

  return (
    <div className="App">
      <h1>My Todo Application</h1>
      <button type="submit">
        Submit
      </button>
      <Todo todos={todos}/>
    </div>
  );
}

export default App;
