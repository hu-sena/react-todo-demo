import React, {useState} from 'react';
import './App.css';

import { TodoTable } from './components/TodoTable';
import { NewTodoForm } from './components/NewTodoForm';

export const App = () => {

  const [showAddTodoForm, setShowTodoForm] = useState(false);

  const [todos, setTodos] = useState([
    {rowNumber: 1, rowDescription: 'Feed Puppy', rowAssigned: 'User 1'},
    {rowNumber: 2, rowDescription: 'Water Plants', rowAssigned: 'User 2'},
    {rowNumber: 3, rowDescription: 'Make Dinner', rowAssigned: 'User 1'},
    {rowNumber: 4, rowDescription: 'Charge Phone', rowAssigned: 'User 1'}
    
  ])

  const addTodo = (description: string, assigned: string) => {
    let rowNumber = 0;
    if (todos.length > 0) {
      // auto increment new todo
      rowNumber = todos[todos.length - 1].rowNumber + 1;
    } else {
      rowNumber = 1;
    }
      const newTodo = {
        rowNumber: rowNumber,
        rowDescription: description,
        rowAssigned: assigned
      };
      setTodos(todos => [...todos, newTodo])
  }
  
  const deleteTodo = (deleteTodoRowNumber: number) => {
    // only return rows that is not deleted 
    let filtered = todos.filter(function (value) {
      return value.rowNumber !== deleteTodoRowNumber;
    });
    setTodos(filtered);
  }
  return (
    <div className="mt-5 container">
      <div className='card'>
        <div className='card-header'>
          Your Todo's
        </div>
        <div className='card-body'>
          <TodoTable todos={todos} deleteTodo={deleteTodo}/>
          <button 
            className='btn btn-primary'
            onClick={() => setShowTodoForm(!showAddTodoForm)}
            >{showAddTodoForm ? 'Close New Todo' : 'New Todo'}</button>
            {/* if showAddTodoForm: true, show NewTodoForm */}
          {showAddTodoForm && <NewTodoForm addTodo={addTodo}/>}
          
        </div>

      </div>
      
    </div>
  );
}


