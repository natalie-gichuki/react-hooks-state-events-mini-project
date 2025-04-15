import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
const [selectedCategory, setSelectCategory] = useState("All");
const [tasks, setTasks] = useState(TASKS);
const filteredTasks = selectedCategory === "All" ? tasks : tasks.filter(task => task.category===selectedCategory);


function handleTaskForm(newTask){
  setTasks([...tasks, newTask]);
}

function handleDelete(deletedText) {
  const updatedTasks = tasks.filter((task) => task.text !== deletedText);
  setTasks(updatedTasks);
}
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={selectedCategory} onSelectCategory={setSelectCategory}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleTaskForm}/>
      <TaskList tasks={filteredTasks} onDeleteTask={handleDelete} />
    </div>
  );
}

export default App;
