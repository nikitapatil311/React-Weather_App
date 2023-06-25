import React from "react";
import './List.css';

// Rest of your code


export default function List({ activities, isGoodWeather}) {
  return (
    <div>
       <h2>
        {isGoodWeather
          ? "the weather is AWESOME 😀! Go outside and:"
          : "bad 😬 weather outside! Here's what you can do"}
      </h2>
      <ul className="list">
        {activities.map((activity) => (
          <li key={activity.id} className="list__item"
          >{activity.name}</li>
        ))}
      </ul>
    </div>
  );
}



