
import React, { useEffect } from "react";
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
  const [activities, setActivities] = useLocalStorage(
    "activities",
    " "
    //  {
    //   default: [
    //     { isGoodWeatherChecked: true, name: "hi" },
    //     { isGoodWeatherChecked: false, name: "hello" },
    //   ],
    // }
  );

  const [weather, setWeather] = useState([]);

  const [continent, setContinent] = useState("");
  const [welcomeMessage, setWelcomeMessage] = useState("");

  useEffect(() => {
    // setActivities([]);
    try {
      async function weatherFetching() {
        const response = await fetch(
          `https://example-apis.vercel.app/api/weather/${continent}`
        );
        const weather = await response.json();
        console.log(weather);
        setWeather(weather);
      }

      weatherFetching();
      const timer = setInterval(() => {
        weatherFetching();
      }, 5000);

      return () => {
        clearInterval(timer);
      };
    } catch (error) {
      console.log(error);
    }

    // weatherFetching();
  }, [
    setWeather,
    continent,
    `https://example-apis.vercel.app/api/weather/${continent}`,
  ]);

  function handleAddActivity(activity, continent) {
    const newActivity = { id: uid(), ...activity };

    setActivities([...activities, { id: uid(), ...newActivity }]);

    setContinent(continent);
    setWelcomeMessage(`Welcome to ${continent}!`);
  }

  function handleDeleteActivity(deleteActivity) {
    console.log("clicked delete button");
    setActivities(activities.filter((activity) => activity !== deleteActivity));
    console.log(deleteActivity);
  }

  const filterActivities = activities.filter(
    (activity) => activity.checkBoxName === weather.isGoodWeather
  );

  return (
    <div className="App">
      <header className={`${continent}`}>
        {welcomeMessage && (
          <h2 className="welcome-message">{welcomeMessage}</h2>
        )}
        <div>
          <span className="weather">
            {" "}
            {weather.condition} {weather.temperature}°C{" "}
          </span>
        </div>{" "}
        <List
          activities={filterActivities}
          onDeleteActivity={handleDeleteActivity}
          isGoodWeather={weather.isGoodWeather}
        />
        <EntryForm onAddActivity={handleAddActivity} />

      </header>
    </div>
  );
}

export default App;
