import { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import header from "./components/header";
function App() {
  const [tareas, setTareas] = useState([]);

  // Cargar tareas del localStorage al iniciar
  useEffect(() => {
    const tareasGuardadas = JSON.parse(localStorage.getItem("tareas"));
    if (tareasGuardadas) {
      setTareas(tareasGuardadas);
    }
  }, []);

  // Guardar tareas cada vez que cambien
  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
  }, [tareas]);

  const agregarTarea = (texto) => {
    const nuevaTarea = {
      id: Date.now(),
      texto,
      completada: false,
    };
    setTareas([...tareas, nuevaTarea]);
  };

  const eliminarTarea = (id) => {
    setTareas(tareas.filter((t) => t.id !== id));
  };

  const alternarCompleta = (id) => {
    setTareas(
      tareas.map((t) =>
        t.id === id ? { ...t, completada: !t.completada } : t
      )
    );
  };

  return (
   
    <div className="container">
      <header/>
      <h1>📝 Lista de Tareas</h1>
      <TaskForm onAddTask={agregarTarea} />
      <TaskList
        tareas={tareas}
        onToggleComplete={alternarCompleta}
        onDeleteTask={eliminarTarea}
      />
    </div>
  );
}

export default App;
