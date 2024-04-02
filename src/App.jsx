import { useState } from 'react'

import AppName from './components/AppName';
import './App.css'
import AddTodo from './components/AddTodo';
import Message from './components/Message';
import TodoItems from './components/TodoItems';

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (newItem, newDate) => {
    const newTodoItem = [...todoItems, { name: newItem, todoItemDate: newDate }];
    setTodoItems(newTodoItem);
  }

  const handleTodoDeleteItem = (todoItemName) => {
    const newTodoItem = todoItems.filter((item) =>
      item.name !== todoItemName
    )
    setTodoItems(newTodoItem);
  }

  return <div className='todo-app'>
    <center className='todo-container'>
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      {todoItems.length === 0 && <Message />}
      <TodoItems todoItems={todoItems} onDeleteItem={handleTodoDeleteItem}></TodoItems>
    </center>
  </div>
}

export default App
