export default function EntryForm({ onAddActivity }) {
  function handleSubmit(e) {
    // console.log("submitted form");
    e.preventDefault();

    // const inputValue = e.target.inputName.value;
    // console.log(inputValue);

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    onAddActivity(data);
    e.target.reset();
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Add New Activity</h1>
        <label id="name">Name: </label>
        <input type="text" htmlFor="name" name="inputName"></input>
        <br />
        <label id="checkBox">Good-Weather activity</label>
        <input type="checkbox"></input>
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
