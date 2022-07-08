import React from "react";

import Task from "./Task";

const Tasks = ({ tasks, handleTaskClick }) => {
  return (
    <>
      {tasks.map((task, index) => (
        <Task task={task} key={index} handleTaskClick={handleTaskClick} />
      ))}
    </>
  );
};

export default Tasks;
