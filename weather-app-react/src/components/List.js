export default function List({ activities }) {
  return (
    <>
      <div>
        <h2>Activites</h2>

        <ul>
          {activities.map((activity) => (
            <li key={activity.id} className="list__item">
              {activity.name}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
