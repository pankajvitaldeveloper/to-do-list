import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, deleteTodo, toggleTodo, editTodo }) => {
  return (
    <ul className="space-y-2">
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          onDelete={() => deleteTodo(index)}
          onToggle={() => toggleTodo(index)}
          onEdit={(newText) => editTodo(index, newText)}
        />
      ))}
    </ul>
  );
};

export default TodoList;