import { useState } from "react";

function TaskForm({onAddTask}){
    const [nuevaTarea,setNuevatarea]= useState("") 
           //useState guarda el texto que el usuario escribe.
           /* onAddTask funcion que reibira la nueva tarea (la creamos en APP)*/
    const handleSubmit = (e) =>{
        e.preventDefault()
        if (nuevaTarea.trim() ===" ") return;
            onAddTask(nuevaTarea)
            setNuevatarea("")
    };

    return(
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            placeholder="Escriba una tareaa....."
            value={nuevaTarea}
            onChange={(e) => setNuevatarea(e.target.value)}
             />
        <button type="submit">Agregar</button>
        </form>
    );
}
    

export default TaskForm; 