import React, { useState } from 'react';

const TodoInput = ({ addTodo }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addTodo(input);
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex mb-4">
      <input
        type="text"
        className="flex-1 px-3 py-2 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-purple-400"
        placeholder="Add a new task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="bg-purple-600 text-white px-4 py-2 rounded-r hover:bg-purple-700 transition"
      >
        Add
      </button>
    </form>
  );
};

export default TodoInput;