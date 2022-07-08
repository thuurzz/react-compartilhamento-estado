import "./AddTask.css";
import Button from "./Button";
import React, { useState, useEffect } from "react";

const AddTask = ({ handleTaskAddition }) => {
  const [inputData, setInputData] = useState("");

  const handleInputChange = (e) => {
    setInputData(e.target.value);
  };

  const handleAddTaskClick = () => {
    handleTaskAddition(inputData);
    setInputData("");
  };

  return (
    <>
      <div className="add-taks-container">
        <input
          onChange={handleInputChange}
          value={inputData}
          className="add-task-input"
          type="text"
        />
        <div className="add-task-button-container">
          <Button className="add-button" onClick={handleAddTaskClick}>
            Adicionar
          </Button>
        </div>
      </div>
    </>
  );
};

export default AddTask;
