import React from "react";
import { useState } from "react";

function NewTaskForm({onTaskFormSubmit, categories}) {

  const [text, setText] = useState("");
  const [category, setCategory] = useState("Produce");

  function handleSubmit(e) {
    e.preventDefault();
    const newTask = {
      text: text,
      category: category,
    };
    onTaskFormSubmit(newTask);
    setText(""); // reset form
    setCategory("Produce");
  }


  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={text}  onChange={(e) => setText(e.target.value)}/>
      </label>
      <label>
        Category
        <select name="category"value={category} onChange={(e) => setCategory(e.target.value)} >
          {categories.filter((cat) => cat !== "All")
          .map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
          {/* render <option> elements for each category here */}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
