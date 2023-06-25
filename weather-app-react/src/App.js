//import logo from "./logo.svg";
import "./App.css";
import EntryForm from "./components/EntryForm";
//import Form from "./components/addActivityForm";
import { useState } from "react";

import useLocalStorage from "use-local-storage-state";
import List from "./components/List";
//import EntriesSession from "./components/EntriesSession";
import { uid } from "uid";
import { useEffect } from "react";

function App() {
  const [activities, setActivities] = useLocalStorage("activities", {
    default: [
      { isGoodWeatherChecked: true, name: "hi" },
      { isGoodWeatherChecked: false, name: "hello" },
    ],
  });

  const [weather, setWeather] = useState([]);

  useEffect(() => {
    setActivities([]);
    async function weatherFetching() {
      const response = await fetch(
        "https://example-apis.vercel.app/api/weather"
      );
      const weather = await response.json();
      console.log(weather);
      setWeather(weather);
    }
    weatherFetching();
  }, [setWeather]);

  function handleAddActivity(activity) {
    const newActivity = { id: uid(), ...activity };

    setActivities([...activities, { id: uid(), ...newActivity }]);
  }

  function handleDeleteActivity(deleteActivity) {
    console.log("clicked delete button");
    setActivities(activities.filter((activity) => activity !== deleteActivity));
    console.log(deleteActivity);
  }

  const filterActivities = activities.filter(
    (activity) => activity.isGoodWeatherChecked === weather.isGoodWeather
  );

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <span>
            {" "}
            {weather.condition}
            {weather.temperature} °C{" "}
          </span>
        </div>{" "}
        <List
          activities={activities}
          onDeleteActivity={handleDeleteActivity}
          isGoodWeather={weather.isGoodWeather}
        />
        <EntryForm onAddActivity={handleAddActivity} />
      </header>
    </div>
  );
}

export default App;
