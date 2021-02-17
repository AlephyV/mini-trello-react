import React, { useState } from "react";
import PropTypes from "prop-types";
import "./taskitem.css";

export default function TaskItem({
  id,
  title,
  state,
  onTaskUpdate,
  onDeleteTask
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editableTitle, setEditableTitle] = useState(title);

  const onTitleChange = (event) => {
    const newTitle = event.target.value;
    setEditableTitle(newTitle);
    onTaskUpdate(id, newTitle, state);
  };

  const onEnter = (event) => {
    if (event.key === "Enter") {
      setIsEditing(false);
      if (editableTitle.length === 0) {
        onDeleteTask(id);
      }
    }
  };

  const onStateChange = (event) => {
    onTaskUpdate(id, title, event.target.value);
  };

  if (isEditing) {
    return (
      <div className="task-item">
        <input
          type="text"
          value={editableTitle}
          onChange={onTitleChange}
          onKeyPress={onEnter}
        />
      </div>
    );
  } else {
    return (
      <div className="task-item">
        <div
          onClick={(e) => {
            setIsEditing(true);
          }}
        >
          {editableTitle}
        </div>
        <select onChange={onStateChange} value={state}>
          <option>Começar</option>
          <option>Em Progresso</option>
          <option value="Concluida">Concluidas</option>
        </select>
      </div>
    );
  }
}

TaskItem.PropTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired
};
