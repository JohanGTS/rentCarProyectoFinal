import React, { useContext, useState } from "react";
import { Modal } from "react-bootstrap";
import { UserContext } from "../Contexts/UserContext";
import { useNavigate } from "react-router-dom";
const PopUp = ({ campos, titulo, handleSubmit, ...props }) => {
  const [formValues, setFormValues] = useState({});
  const {usuario,setUsuario} = useContext(UserContext);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const navigate = useNavigate();
  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit(formValues);
    setUsuario(formValues);
    // Cerrar el modal u realizar otras acciones después de enviar el formulario
    props.onHide();
    if (usuario) {
      navigate("/dashboard");
    }
  };
  return (
    <Modal
      {...props}
      size="ls"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">{titulo}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="container">
          <form onSubmit={handleFormSubmit}>
            {campos.map((campo) => (
              <div key={campo.id}>
                <label
                  htmlFor={campo.id}
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  {campo.label}{" "}
                </label>
                <input
                  className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  type={campo.tipo}
                  id={campo.id}
                  name={campo.nombre}
                  placeholder={campo.placeholder}
                  required={campo.required}
                  onChange={handleInputChange}
                />
              </div>
            ))}
            <div className="flex justify-end">
              <button
                className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 mx-2 rounded"
                type="submit"
              >
                Sign Up
              </button>
              <button
                className="flex-shrink-0 bg-red-500 hover:bg-red-700 border-red-500 hover:border-red-700 text-sm border-4 text-white py-1 px-2 rounded"
                type="button"
                onClick={props.onHide}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
};

export default PopUp;
