
export default function EntryForm({ onAddActivity }) {
  function handleSubmit(e) {
    // console.log("submitted form");
    e.preventDefault();

    //  const inputValue = e.target.inputName.value;
    // console.log(inputValue);

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    const checkBoxValue = e.target.checkBoxName.checked;
    data.checkBoxName = checkBoxValue;
    console.log(checkBoxValue);

    onAddActivity(data);

    e.target.reset();
    e.target.elements.inputName.focus();
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Add New Activity</h1>
        <label id="name">Name: </label>
        <input
          type="text"
          htmlFor="name"
          class="nameInput"
          name="inputName"
        ></input>
        <br />
        <label id="checkBox">Good-Weather activity</label>
        <input
          type="checkbox"
          className="check"
          id="checkBoxInput"
          name="checkBoxName"
        ></input>
        <br />
        <button type="submit" className="submitButton">
          Submit
        </button>
      </form>
    </>

  );
}
