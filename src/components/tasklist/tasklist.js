import React from "react";
import "./tasklist.css";
import PropTypes from "prop-types";
import TaskItem from "../taskitem/taskitem";
import PlusIcon from "../../img/plus-icon.svg";

export default function TaskList({
  title,
  state,
  onAddTask,
  tasks,
  onTaskUpdate,
  onDeleteTask
}) {
  const addTask = () => {
    onAddTask("Nova Tarefa", state);
  };

  return (
    <div className="tasklist">
      <div className="title">{title}</div>
      <div className="content">
        {tasks.map((task) => {
          return (
            <TaskItem
              key={task.id}
              id={task.id}
              title={task.title}
              state={task.state}
              onTaskUpdate={onTaskUpdate}
              onDeleteTask={onDeleteTask}
            />
          );
        })}
        {tasks.length === 0 && <div className="empty-list">Lista vazia</div>}
        <button className="btn" onClick={addTask}>
          <img src={PlusIcon} alt="plus" />
          Adicionar tarefa
        </button>
      </div>
    </div>
  );
}

TaskList.PropTypes = {
  title: PropTypes.string.isRequired,
  onAddTask: PropTypes.func.isRequired,
  tasks: PropTypes.array.isRequired
};
