import React, {useState} from 'react';
import './App.css';

import TodoTable from './components/TodoTable';

function App() {
  
  const [todos, setTodos] = useState([
    {rowNumber: 1, rowDescription: 'Feed Puppy', rowAssigned: 'User 1'},
    {rowNumber: 2, rowDescription: 'Water Plants', rowAssigned: 'User 2'},
    {rowNumber: 3, rowDescription: 'Make Dinner', rowAssigned: 'User 1'},
    {rowNumber: 4, rowDescription: 'Charge Phone', rowAssigned: 'User 1'}
    
  ])

  const addTodo = () => {
    // console.log('Our addTodo btn has been clicked!');
    if (todos.length > 0) {
      const newTodo = {
        rowNumber: todos.length + 1,
        rowDescription: 'New Todo',
        rowAssigned: 'User 3'
      };
      setTodos(todos => [...todos, newTodo])
      
    }
  }
  
  return (
    <div className="mt-5 container">
      <div className='card'>
        <div className='card-header'>
          Your Todo's
        </div>
        <div className='card-body'>
          <TodoTable todos={todos}/>
          <button className='btn btn-primary' onClick={addTodo}>Add new todo</button>
        </div>

      </div>
      
    </div>
  );
}

export default App;
