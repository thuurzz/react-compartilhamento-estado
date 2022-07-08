import React from "react";

import Task from "./Task";

const Tasks = ({ tasks, handleTaskClick, handleTaskDeletion }) => {
  return (
    <>
      {tasks.map((task, index) => (
        <Task
          task={task}
          key={index}
          handleTaskClick={handleTaskClick}
          handleTaskDeletion={handleTaskDeletion}
        />
      ))}
    </>
  );
};

export default Tasks;
