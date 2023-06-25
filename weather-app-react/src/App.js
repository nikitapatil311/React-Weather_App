
import React, { useEffect } from "react";
import "./App.css";
import EntryForm from "./components/EntryForm";
// import listActivity from "./components/EntryForm";
import useLocalStorageState from "use-local-storage-state";
import List from "./components/List";
import { uid } from "uid";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [
      { id: "Xssdke", name: "Start Project Four" },
      { id: "eee345", name: "Love Someone Today" },
    ],
  });
  
  const addActivity = (activity) => {
    const newActivity = { id: uid(), ...activity };
    setActivities([...activities, newActivity]);
  };


  useEffect(() => {
    setActivities([]);
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}

  <List activities={activities} />

  <EntryForm handleAddActivity={addActivity} />
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
