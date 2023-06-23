//import logo from "./logo.svg";
import "./App.css";
import EntryForm from "./components/List";
//import Form from "./components/addActivityForm";
import listActivity from "./components/List";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}

        <EntryForm onAddEntry={listActivity} />
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

// function Form() {
//   return (
//     <>
//       <h1>Add New Activity</h1>
//       <label id="name">Name</label>
//       <input type="text" htmlFor="name"></input>
//     </>
//   );
// }

export default App;
