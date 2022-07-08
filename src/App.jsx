import React, { useState } from "react";

import "./App.css";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

import { v4 as uuid } from "uuid";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "Estudar React",
      completed: false,
    },
    {
      id: "2",
      title: "Estudar Node",
      completed: true,
    },
  ]);

  const handlwTaskAddition = (taskTittle) => {
    const newTasks = [
      ...tasks,
      {
        id: uuid(),
        title: taskTittle,
        completed: false,
      },
    ];
    setTasks(newTasks);
  };

  return (
    <>
      <div div className="container">
        <AddTask handlwTaskAddition={handlwTaskAddition} />
        <Tasks tasks={tasks}></Tasks>
      </div>
    </>
  );
};

export default App;
