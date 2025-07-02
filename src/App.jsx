import React, { useState } from "react";
import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "./index.css";

const App = () => {
  const [todos, setTodos] = useState([]);

  // addTodo: Adds a new todo item to the list
  const addTodo = (todo) => {
    setTodos([...todos, { text: todo, completed: false }]);
  };

  // deleteTodo: Removes a todo item from the list by its index
  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
    console.log(index);
  };

  // toggleTodo: Toggles the completed state of a todo item
  const toggleTodo = (index) => {
    const newTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
  };

  // editTodo: Updates the text of a specific todo item
  const editTodo = (index, newText) => {
    const newTodos = todos.map((todo, i) =>
      i === index ? { ...todo, text: newText } : todo
    );
    setTodos(newTodos);
  };

  return (
    <>
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
      <footer className="fixed right-10 bottom-10 text-gray-500 text-sm z-50">
      <a
        href="https://github.com/pankajvitaldeveloper/to-do-list"
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:text-blue-600"
      >
        View on GitHub
      </a>
    </footer>
    </>
  );
};

export default App;