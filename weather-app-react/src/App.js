//import logo from "./logo.svg";
import "./App.css";
import EntryForm from "./components/EntryForm";
//import Form from "./components/addActivityForm";
//import { useState } from "react";
import useLocalStorage from "use-local-storage-state";
import List from "./components/List";
//import EntriesSession from "./components/EntriesSession";
import { uid } from "uid";
import { useEffect } from "react";

const isGoodWeather = true;

function App() {
  const [activities, setActivities] = useLocalStorage("entries", {
    default: [{ isChecked: true, name: "hi" }],
  });

  //console.log(activities);

  function handleAddActivity(activity) {
    const newActivity = { id: uid(), ...activity };
    setActivities([...activities, newActivity]);
  }

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

        <EntryForm onAddActivity={handleAddActivity} />
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

export default App;
