import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";

import "./App.css";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import Header from "./components/Header";
import TaskDetails from "./components/TaskDetails";

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const { data } = await axios.get(
        "https://62cb59441eaf3786ebb830bc.mockapi.io/api/v1/todo"
      );
      setTasks(data);
    };
    fetchTasks();
  }, []);

  const handleTaskAddition = (tasktitle) => {
    const newTasks = [
      ...tasks,
      {
        id: uuid(),
        title: tasktitle,
        completed: false,
      },
    ];
    setTasks(newTasks);
  };

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) return { ...task, completed: !task.completed };
      return task;
    });
    setTasks(newTasks);
  };

  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  };

  return (
    <Router>
      <div div className="container">
        <Header>Minhas taferas</Header>
        <Route
          path="/"
          exact
          render={() => (
            <>
              <AddTask handleTaskAddition={handleTaskAddition} />
              <Tasks
                tasks={tasks}
                handleTaskClick={handleTaskClick}
                handleTaskDeletion={handleTaskDeletion}
              />
            </>
          )}
        />
        <Route path="/:taskTitle" exact component={TaskDetails} />
      </div>
    </Router>
  );
};

export default App;
