export default function EntryForm({ onAddActivity }) {
  function handleSubmit(e) {
    // console.log("submitted form");
    e.preventDefault();

    //  const inputValue = e.target.inputName.value;
    // console.log(inputValue);

    const formData = new FormData(e.target);
    formData.append("continent", e.target.continent.value);

    const data = Object.fromEntries(formData);
    console.log(data);

    const checkBoxValue = e.target.checkBoxName.checked;
    data.checkBoxName = checkBoxValue;
    // console.log(checkBoxValue);

    // Add the following line to access the continent value
    const continent = e.target.continent.value;
    // console.log(continent);
    //formData.append("continent", continent);

    onAddActivity(data, continent);

    e.target.reset();
    e.target.elements.inputName.focus();
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Add New Activity</h1>
        <div className="nameDiv">
          <label id="name">Name: </label>
          <input
            type="text"
            htmlFor="name"
            class="nameInput"
            name="inputName"
            maxLength="20"
          ></input>
        </div>
        <div className="nameDiv">
          <label id="checkBox">Good-Weather activity</label>
          <input
            type="checkbox"
            className="check"
            id="checkBoxInput"
            name="checkBoxName"
          ></input>
        </div>
        <div className="dropdown">
          <label for="continent">Please choose a continent: </label>
          <select name="continent" id="continent">
            <option value="">--Select One--</option>
            <option value="sahara">sahara</option>
            <option value="europe">europe</option>
            <option value="arctic">arctic</option>
            <option value="rainforest">rainforest</option>
          </select>
        </div>
        <div className="nameDiv">
          <button type="submit" className="submitButton">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
