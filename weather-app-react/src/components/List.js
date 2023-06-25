export default function List({ activities, onDeleteActivity, isGoodWeather }) {
  return (
    <div>
      <h2>
        {isGoodWeather
          ? "the weather is AWESOME 😀! Go outside and:"
          : "bad 😬 weather outside! Here's what you can do"}
      </h2>

      <ul>
        {activities.map((activity) => (
          <li key={activity.id} className="list__item">
            {activity.inputName}
            <button
              className="deleteButton"
              type="button"
              onClick={() => onDeleteActivity?.(activity)}
            >
              ✕
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
