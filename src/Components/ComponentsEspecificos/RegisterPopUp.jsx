import React, { useContext, useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../Contexts/UserContext";
import { addData, getAllData, getData } from "../../Features/apiCalls";
const RegisterPopUp = (props) => {
  const { usuario, setUsuario } = useContext(UserContext);
  const handleInputChange = (e) => {
    const { id, value, type } = e.target;
     setFormValues({ ...formValues, [id]: value });
  };
  const currentDate = new Date();
  const formattedDate = currentDate
    .toISOString()
    .slice(0, 19)
    .replace("T", " ");
  const valorInicial = {
    idTercero_ter: 0,
    Nombre_ter: "",
    Telefono_ter: "",
    idDocumento_ter: 1,
    Documento_ter: "",
    Fecha_Nacimiento_ter: "",
    Correo_ter: "",
    idTipoUsuario_usu: 3,
    Nombre_usu: "",
    Clave_usu: "",
    Fecha_Ingreso_usu: formattedDate.toString(),
    Estado_usu: 1,
    Especificacion_terdir: "",
  };
  const [formValues, setFormValues] = useState(valorInicial);
  const [esExtranjero, setEsExtranjero] = useState(false);
  const [enviar, setEnviar] = useState(true);
  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const guardar = document.getElementById("guardar");
    guardar.focus();
    const formulario = document.getElementById("formulario");

    setShowModal(true);
    const errores = await validarForm(formValues);
    console.log(errores);
    setFormErrors(errores);
    if (Object.keys(formErrors).length === 0) {
      await addData("personal/Cliente", formValues);
      formulario.reset();
      props.onHide();
    }

    setShowModal(false);
  };
  const handleSelectChange = (e) => {
    const { id, value } = e.target;
    const selectId = id; //
    const optionId =
      e.target.options[e.target.selectedIndex].getAttribute("data-key");

    setFormValues({
      ...formValues,
      [selectId]: parseInt(optionId),
    });
    console.log(formValues);
  };
  const [showModal, setShowModal] = useState(false);

  const validarForm = async (form) => {
    const errors = {};
    console.log(form);
    if (form.Clave_usu !== form.passwordS || !form.Clave_usu || !form.passwordS)
      errors.Clave_usu = "Las contraseñas no coinciden";

    if (!form.Documento_ter)
      errors.Documento_ter = "Debe introducir su licencia de conducir";
    if (!form.Nombre_ter) errors.Nombre_ter = "Debe introducir su nombre";
    if (!form.Telefono_ter) errors.Telefono_ter = "Debe introducir su teléfono";
    if (!form.Fecha_Nacimiento_ter)
      errors.Fecha_Nacimiento_ter = "Debe introducir su fecha de nacimiento ";
    if (!esExtranjero) {
      const validarCedula = await fetch(
        `https://api.digital.gob.do/v3/cedulas/${form.Documento_ter}/validate`
      );
      const res = await validarCedula.json();
      console.log(res);
      if (res.valid == false)
        errors.Documento_ter = "Licencia de conducir inválida";
    }
    if (form.Nombre_usu) {
      const usuarioExistente = await getData("personal/usuario", {
        Nombre_usu: formValues.Nombre_usu.toLowerCase(),
      });
      if (usuarioExistente)
        errors.Nombre_usu = "Este nombre de usuario no está disponible";
    } else {
      errors.Nombre_usu = "Debe de especificar un nombre de usuario";
    }
    return errors;
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
          Registrarse
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="container">
          <form id="formulario">
            <div key={"Nombre_ter"}>
              <label
                htmlFor={"Nombre_ter"}
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                {"Nombre completo"}
              </label>
              <input
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                type={"text"}
                id={"Nombre_ter"}
                name={"Nombre_ter"}
                placeholder={"Ingrese sus nombres"}
                onChange={handleInputChange}
              />
            </div>
            <p className="text-red-700 text-sm font-bold mb-2">
              {formErrors.Nombre_ter}
            </p>
            <div key={"Telefono_ter"}>
              <label
                htmlFor={"Telefono_ter"}
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                {"Teléfono"}
              </label>
              <input
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                type={"tel"}
                id={"Telefono_ter"}
                name={"Telefono_ter"}
                placeholder={"Teléfono"}
                onChange={handleInputChange}
                required
              />
            </div>
            <p className="text-red-700 text-sm font-bold mb-2">
              {formErrors.Telefono_ter}
            </p>
            <div>
              <label>
                <input
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500  focus:ring-2 "
                  type="radio"
                  name="nacionalidad"
                  value="dominicano"
                  checked={!esExtranjero}
                  onChange={() => setEsExtranjero(false)}
                />
                Dominicano
              </label>
              <label>
                <input
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500  focus:ring-2 "
                  type="radio"
                  name="nacionalidad"
                  value="extranjero"
                  checked={esExtranjero}
                  onChange={() => setEsExtranjero(true)}
                />
                Extranjero
              </label>
            </div>

            <div>
              <label
                htmlFor={"licencia"}
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                {"Licencia de conducir"}
              </label>
              <input
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                type={"text"}
                id={"Documento_ter"}
                name={"Documento_ter"}
                placeholder={"Ingrese su licencia de conducir"}
                onChange={handleInputChange}
                required
              />
            </div>
            <p className="text-red-700 text-sm font-bold mb-2">
              {formErrors.Documento_ter}
            </p>

            <div key={"Fecha_Nacimiento_ter"}>
              <label
                htmlFor={"Fecha_Nacimiento_ter"}
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                {"Fecha de nacimiento"}
              </label>
              <p className="text-red-700 text-sm font-bold mb-2">
                {formErrors.Fecha_Nacimiento_ter}
              </p>
              <input
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                type={"date"}
                id={"Fecha_Nacimiento_ter"}
                name={"Fecha_Nacimiento_ter"}
                placeholder={"Seleccione su fecha de nacimiento"}
                onChange={handleInputChange}
                required
              />
            </div>
            <div key={"Correo_ter"}>
              <label
                htmlFor={"Correo_ter"}
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                {"Email"}
              </label>
              <input
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                type={"email"}
                id={"Correo_ter"}
                name={"Correo_ter"}
                placeholder={"Ingrese su email"}
                onChange={handleInputChange}
                required
              />
            </div>
            <div key={"Nombre_usu"}>
              <label
                htmlFor={"Nombre_usu"}
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                {"Nombre de usuario"}
              </label>
              <input
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                type={"text"}
                id={"Nombre_usu"}
                name={"Nombre_usu"}
                placeholder={"Ingrese su email"}
                onChange={handleInputChange}
                required
              />
            </div>
            <p className="text-red-700 text-sm font-bold mb-2">
              {formErrors.Nombre_usu}
            </p>
            <div key={"Clave_usu"}>
              <label
                htmlFor={"Clave_usu"}
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                {"Contraseña"}
              </label>
              <input
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                type={"password"}
                id={"Clave_usu"}
                name={"Clave_usu"}
                placeholder={"Contraseña"}
                onChange={handleInputChange}
                required
              />
              <input
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                type={"password"}
                id={"passwordS"}
                name={"passwordS"}
                placeholder={"Repita la contraseña"}
                onChange={handleInputChange}
                required
              />
            </div>
            <p className="text-red-700 text-sm font-bold mb-2">
              {formErrors.Clave_usu}
            </p>
            <div>
              <label
                htmlFor={"CodigoPostal_dir"}
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                {"Codigo postal"}
              </label>
              <input
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                type={"text"}
                id={"CodigoPostal_dir"}
                name={"CodigoPostal_dir"}
                placeholder={"Ingrese su licencia de conducir"}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label
                htmlFor={"Especificacion_terdir"}
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                {"Especificacion direccion"}
              </label>
              <input
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                type={"text"}
                id={"Especificacion_terdir"}
                name={"Especificacion_terdir"}
                placeholder={"Espeficique mejor su dirección"}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="flex justify-end">
              <button
                className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 mx-2 rounded"
                type="submit"
                onClick={handleSubmit}
                id="guardar"
              >
                Registrar
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
        {showModal && (
          <div className="modal-backdrop">
            <div className="modal-content">Esperando respuesta...</div>
          </div>
        )}
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
};

export default RegisterPopUp;
