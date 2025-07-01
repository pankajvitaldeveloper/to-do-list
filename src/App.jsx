import React, { useState } from 'react';
import Header from './components/Header';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import './index.css';

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, { text: todo, completed: false }]);
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
    console.log(index);
  };

  const toggleTodo = (index) => {
    const newTodos = todos.map((todo, i) => 
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
  };

  const editTodo = (index, newText) => {
    const newTodos = todos.map((todo, i) =>
      i === index ? { ...todo, text: newText } : todo
    );
    setTodos(newTodos);
  };

  return (
    <div className="min-h-screen  bg-gradient-to-br from-blue-100 to-purple-200 flex flex-col items-center py-10">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-md p-6">
        <Header />
        <TodoInput addTodo={addTodo} />
        <TodoList 
          todos={todos} 
          deleteTodo={deleteTodo} 
          toggleTodo={toggleTodo}
          editTodo={editTodo}
        />
      </div>
    </div>
  );
};

export default App;