
import React from "react";
import './EntryForm.css'; 
export default function EntryForm({ handleAddActivity }) {
  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.append("isForGoodWeather", e.target.isForGoodWeather.checked);
   const data = Object.fromEntries(formData);
    data.isForGoodWeather = e.target.isForGoodWeather.checked; // Get the value from the checkbox

    // data.isForGoodWeather = formData.get("isForGoodWeather") === "on";
   
    handleAddActivity(data);
    console.log(data)
    e.target.reset();
   
  }

  return (
  
      <form onSubmit={handleSubmit}>
        <h1 className="purple-heading">Add New Activity</h1>
        <div className="form-group">
        <label id="name">Name: </label>
        <input type="text" id="name" name="name" htmlFor="name"></input>
        </div>
        <div className="form-group">
        <label id="checkBox">Good-Weather activity</label>
        <input type="checkbox"id="isForGoodWeather"
        name="isForGoodWeather" ></input>
        <br />
        </div>
        <button type="submit">Submit</button>
      </form>
  
  );
}
