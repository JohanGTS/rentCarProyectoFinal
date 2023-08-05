import React, { useEffect, useState, useRef } from "react";
import { Modal } from "react-bootstrap";
import { UserContext } from "../Contexts/UserContext";
import { useNavigate } from "react-router-dom";
import {
  getData,
  getAllData,
  addData,
  deleteData,
  updateData,
  getAllDataSP,
  addDataLista,
  deleteDataLista,
} from "../Features/apiCalls";
const PopUpPiezaRecibe = ({ valorInicial, ...props }) => {
  const [checklistData, setChecklistData] = useState([]);
  const [checkedTasks, setCheckedTasks] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData("recibir/pieza", {
          id: valorInicial.idReserva_rp,
        });
        setChecklistData(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [valorInicial]);
  const handleCheckboxChange = (taskId) => {
    console.log(taskId);
    const updatedChecklistData = checklistData.map((task) =>
      task.idPieza_rp === taskId
        ? { ...task, completed: !task.completed }
        : task
    );
    setChecklistData(updatedChecklistData);

    const taskIndex = checkedTasks.findIndex(
      (task) => task.idPieza_rp === taskId
    );
    if (taskIndex !== -1) {
      setCheckedTasks((prev) =>
        prev.filter((task) => task.idPieza_rp !== taskId)
      );
    } else {
      setCheckedTasks((prev) => [
        ...prev,
        updatedChecklistData.find((task) => task.idPieza_rp === taskId),
      ]);
    }
  };
  const handleSave = async (e) => {
    try {
      e.preventDefault();
      //const res = await addDataLista("entrega", checklistData);
      const checkedItems = checklistData.filter((task) => task.completed);
      const itemsToAdd = checkedItems.map((item) => ({
        ...item,
        idReserva_rp: valorInicial.idReserva_rp,
      }));
      await deleteDataLista("entrega", itemsToAdd);
      await updateData("entrega/reserva", {
        idReserva_rp: valorInicial.idReserva_rp,
        estado_res: "F",
      });
      console.log(itemsToAdd);
    } catch (error) {
      console.error("Error al guardar el checklist:", error);
    }
    props.onHide();
  };

  return (
    <Modal
      {...props}
      size="ls"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {"Aparatos entregados"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="container">
          <form id="formulario">
            <>
              <div className="flex flex-col">
                {checklistData.map((task, index) => (
                  <div key={index}>
                    <label className="flex items-center m-2 cursor-pointer">
                      <input
                        type="checkbox"
                        className="form-checkbox h-4 w-4"
                        checked={task?.completed ? task.completed : false}
                        onChange={() => handleCheckboxChange(task.idPieza_rp)}
                      />
                      <span className="ml-2">{task.Descripcion_pie}</span>
                    </label>
                  </div>
                ))}
              </div>
            </>
            <div className="flex justify-end">
              <button
                className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 mx-2 rounded"
                onClick={handleSave}
                id="guardar"
              >
                Guardar
              </button>
              <button
                className="flex-shrink-0 bg-red-500 hover:bg-red-700 border-red-500 hover:border-red-700 text-sm border-4 text-white py-1 px-2 rounded"
                type="button"
                onClick={props.onHide}
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
};

export default PopUpPiezaRecibe;
