
import React from "react";
export default function EntryForm({ handleAddActivity }) {
  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    handleAddActivity(data);
    console.log(data)
    e.target.reset();
   
  }

  return (
  
      <form onSubmit={handleSubmit}>
        <h1>Add New Activity</h1>
        <label id="name">Name: </label>
        <input type="text" id="name" name="name" htmlFor="name"></input>
        <br />
        <label id="checkBox">Good-Weather activity</label>
        <input type="checkbox"></input>
        <br />
        <button type="submit">Submit</button>
      </form>
  
  );
}
