import React, { useState } from 'react';

const TodoItem = ({ todo, onDelete, onToggle, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    if (editText.trim()) {
      onEdit(editText);
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setEditText(todo.text);
    setIsEditing(false);
  };

  return (
    <li className="flex items-center justify-between bg-gray-100 px-4 py-2 rounded shadow-sm">
      {isEditing ? (
        <div className="flex-1 flex items-center">
          <input
            className="flex-1 px-2 py-1 border border-gray-300 rounded focus:outline-none"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            autoFocus
          />
          <button
            className="ml-2 px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition"
            onClick={handleSave}
          >
            Save
          </button>
          <button
            className="ml-2 px-2 py-1 bg-gray-400 text-white rounded hover:bg-gray-500 transition"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      ) : (
        <>
          <span
            className={`flex-1 cursor-pointer ${todo.completed ? 'line-through text-gray-400' : 'text-gray-800'}`}
            onClick={onToggle}
          >
            {todo.text}
          </span>
          <button
            className="ml-2 px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            onClick={handleEdit}
          >
            Edit
          </button>
          <button
            onClick={onDelete}
            className="ml-2 px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
          >
            Delete
          </button>
        </>
      )}
    </li>
  );
};

export default TodoItem;