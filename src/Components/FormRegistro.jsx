import React from "react";
import { Button, Modal } from "react-bootstrap";
const FormRegistro = ({ campos, ...props }) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="container">
          <form>
            {campos.map((campo) => (
              <div key={campo.id}>
                <label htmlFor={campo.id}>{campo.label}</label>
                <input
                  type={campo.tipo}
                  id={campo.id}
                  name={campo.nombre}
                  placeholder={campo.placeholder}
                />
              </div>
            ))}
            <button type="submit">Guardar</button>
          </form>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default FormRegistro;
