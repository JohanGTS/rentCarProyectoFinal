import React, { useState, useEffect } from "react";
import { getAllData, addData } from "../Features/apiCalls";
import axios from "axios";

const Checklist = () => {
  const [checklistData, setChecklistData] = useState([]);
  const [checkedTasks, setCheckedTasks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllData("pieza");
        setChecklistData(data);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const handleCheckboxChange = (taskId) => {
    const updatedChecklistData = checklistData.map((task) =>
      task.idPieza_pie === taskId
        ? { ...task, completed: !task.completed }
        : task
    );
    setChecklistData(updatedChecklistData);

    // Agregar o eliminar la tarea marcada del estado checkedTasks
    const taskIndex = checkedTasks.findIndex(
      (task) => task.idPieza_pie === taskId
    );
    if (taskIndex !== -1) {
      // La tarea está marcada, eliminarla de checkedTasks
      setCheckedTasks((prev) =>
        prev.filter((task) => task.idPieza_pie !== taskId)
      );
    } else {
      // La tarea no está marcada, agregarla a checkedTasks
      setCheckedTasks((prev) => [
        ...prev,
        updatedChecklistData.find((task) => task.idPieza_pie === taskId),
      ]);
    }
  };

  const handleSave = () => {
    try {
      //await addData("tareasCompletadas", checkedTasks);
      console.log("Checklist guardado exitosamente", checkedTasks);
    } catch (error) {
      console.error("Error al guardar el checklist:", error);
    }
  };

  return (
    <>
      <div className="flex flex-col">
        {checklistData.map((task) => (
          <div key={task.idPieza_pie}>
            <input className="m-2"
              type="checkbox"
              checked={task.completed}
              onChange={() => handleCheckboxChange(task.idPieza_pie)}
            />
            <label>{task.Descripcion_pie}</label>
          </div>
        ))}
      </div>
        <button onClick={handleSave}>Guardar</button>
    </>
  );
};

export default Checklist;
