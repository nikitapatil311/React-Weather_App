
import React, { useEffect } from "react";
import "./App.css";
import EntryForm from "./components/EntryForm";
// import listActivity from "./components/EntryForm";
import useLocalStorageState from "use-local-storage-state";
import List from "./components/List";
import { uid } from "uid";

function App() {

  
  // Use local storage to update activities
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [
      { id: "Xssdke", name: "Start Project Four", isForGoodWeather: false  },
      { id: "eee345", name: "Love Someone Today" , isForGoodWeather: true },
    ],
  });


  // Use local storage to get weather from URL and update
 const [weather, setWeather] = useLocalStorageState("weather", {
    defaultValue: null,
  });


const url =  "https://example-apis.vercel.app/api/weather"
  useEffect(() => {
        // Clear stored activities on refresh
        setActivities([]);

   try {
async function fetchWeather(){
const response = await fetch(url)
const data = await response.json()
// console.log(data)

// update the weather data 
setWeather(data)
}

// set and clear the interval to fetch the data after 3 secs

fetchWeather();
const timer = setInterval(() => {
  fetchWeather();
}, 3000);

return () => {
  clearInterval(timer);
};
} 



// catch fetching data errors
catch (error) {
  console.error(error);
}
}, 


// Update the weather

[setWeather]);




//  const isGoodWeather = true;
 

  
  const addActivity = (activity) => {
    const newActivity = { id: uid(), ...activity };
    setActivities([...activities, newActivity]);
  };





// Filter activities based on weather condition
const filteredActivities = activities.filter(
  (activity) => activity.isForGoodWeather === 
    weather.isGoodWeather
);



  return (
    <div className="App">
      <header >
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
    {weather && (
          <h1 className="App_head">
            <span>{weather.condition}</span>
            <span>{weather.temperature} °C</span>
          </h1>
        )}
  <List activities={filteredActivities}
   isGoodWeather={weather.isGoodWeather}
   />

  <EntryForm handleAddActivity={addActivity}
   />
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
