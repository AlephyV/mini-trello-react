import "./styles.css";
import Navbar from "./components/navbar/navbar";
import TaskList from "./components/tasklist/tasklist";
import { useState } from "react";

let idAcc = 0;
const generateId = () => {
  idAcc = idAcc + 1;
  return idAcc;
};

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (title, state) => {
    const newTask = {
      id: generateId(),
      title,
      state
    };
    setTasks((currentTasks) => {
      return [...currentTasks, newTask];
    });
  };

  const updateTask = (id, title, state) => {
    setTasks((existingTasks) => {
      return existingTasks.map((task) => {
        if (task.id === id) {
          return { ...task, title, state };
        } else {
          return task;
        }
      });
    });
  };

  const deleteTask = (id) => {
    setTasks((existingTasks) => {
      return existingTasks.filter((t) => t.id != id);
    });
  };

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <TaskList
          title="Começar"
          onAddTask={addTask}
          state="Começar"
          tasks={tasks.filter((t) => t.state === "Começar")}
          onTaskUpdate={updateTask}
          onDeleteTask={deleteTask}
        />
        <TaskList
          title="Em Progresso"
          onAddTask={addTask}
          state="Em Progresso"
          tasks={tasks.filter((t) => t.state === "Em Progresso")}
          onTaskUpdate={updateTask}
          onDeleteTask={deleteTask}
        />
        <TaskList
          title="Concluidas"
          onAddTask={addTask}
          state="Concluida"
          tasks={tasks.filter((t) => t.state === "Concluida")}
          onTaskUpdate={updateTask}
          onDeleteTask={deleteTask}
        />
      </div>
    </div>
  );
}
