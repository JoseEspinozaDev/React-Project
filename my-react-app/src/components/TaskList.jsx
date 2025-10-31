function TaskList({ tareas, onToggleComplete, onDeleteTask }) {
  return (
    <ul>
      {tareas.map((tarea) => (
        <li key={tarea.id}>
          <input
            type="checkbox"
            checked={tarea.completada}
            onChange={() => onToggleComplete(tarea.id)}
          />
          <span style={{ textDecoration: tarea.completada ? "line-through" : "none" }}>
            {tarea.texto}
          </span>
          <button onClick={() => onDeleteTask(tarea.id)}>❌</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
