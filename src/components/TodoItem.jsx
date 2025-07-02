import React, { useState } from "react";

// TodoItem component represents a single todo item in the list.
// It handles editing, deleting, and toggling completion of the todo.
const TodoItem = ({ todo, onDelete, onToggle, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false); // Tracks if the item is in edit mode
  const [editText, setEditText] = useState(todo.text); // Stores the current text for editing

  // handleEdit: Switches the item to edit mode
  const handleEdit = () => {
    setIsEditing(true);
  };

  // handleSave: Saves the edited text and exits edit mode
  const handleSave = () => {
    if (editText.trim()) {
      onEdit(editText); // Calls parent to update the todo text
      setIsEditing(false);
    }
  };

  // handleCancel: Cancels editing and resets the text
  const handleCancel = () => {
    setEditText(todo.text);
    setIsEditing(false);
  };

  return (
    <li className="flex items-center justify-between bg-gray-100 px-4 py-2 rounded shadow-sm">
      {isEditing ? (
        <div className="flex-1 flex items-center">
          {/* Input for editing the todo text */}
          <input
            className="flex-1 px-2 py-1 border border-gray-300 rounded focus:outline-none"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            autoFocus
          />
          {/* Save button to confirm edit */}
          <button
            className="ml-2 px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition"
            onClick={handleSave}
          >
            Save
          </button>
          {/* Cancel button to exit edit mode without saving */}
          <button
            className="ml-2 px-2 py-1 bg-gray-400 text-white rounded hover:bg-gray-500 transition"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      ) : (
        <>
          {/* Clicking the text toggles completion */}
          <span
            className="flex-1 cursor-pointer text-gray-800"
            onClick={onToggle}
          >
            {todo.text}
            {todo.completed && (
              <span className="ml-2 text-green-600 font-semibold">
                (Completed)
              </span>
            )}
          </span>
          {/* Edit button to enable editing */}
          <button
            className="ml-2 px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            onClick={handleEdit}
          >
            Edit
          </button>
          {/* Delete button to remove the todo */}
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