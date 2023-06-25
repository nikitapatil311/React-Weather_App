import React from "react";
import './List.css';

// Rest of your code


export default function List({ activities }) {
  return (
    <div>
      <h2>Activities</h2>
      <ul className="list">
        {activities.map((activity) => (
          <li key={activity.id} className="list__item"
          >{activity.name}</li>
        ))}
      </ul>
    </div>
  );
}



