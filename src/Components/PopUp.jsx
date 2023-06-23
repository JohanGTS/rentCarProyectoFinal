import React, { useState } from 'react';

const PopUp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const togglePopUp = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar los datos del formulario
    console.log(formData);
    // Restablecer el formulario
    setFormData({
      name: '',
      email: '',
      password: '',
    });
    // Cerrar el PopUp
    togglePopUp();
  };

  return (
    <div>
      <button onClick={togglePopUp}>Abrir PopUp</button>
      {isOpen && (
        <div className="popup">
          <div className="popup-content">
            <h2>Formulario de Registro</h2>
            <form onSubmit={handleSubmit}>
              <label>
                Nombre:
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Contraseña:
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                />
              </label>
              <button type="submit">Enviar</button>
            </form>
            <button onClick={togglePopUp}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopUp;
