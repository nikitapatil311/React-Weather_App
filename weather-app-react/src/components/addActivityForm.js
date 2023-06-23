import React from "react";

export default function Form() {
  return (
    <>
      <h1>Add New Activity</h1>
      <label id="name">Name: </label>
      <input type="text" htmlFor="name"></input>
      <br />
      <label id="checkBox">Good-Weather activity</label>
      <input type="checkbox"></input>
      <br />
      <button type="submit">Submit</button>
    </>
  );
}
