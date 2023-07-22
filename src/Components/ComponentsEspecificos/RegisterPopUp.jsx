import React, { useContext, useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../Contexts/UserContext";
import { addData, getAllData } from "../../Features/apiCalls";
const RegisterPopUp = (props) => {
  const { usuario, setUsuario } = useContext(UserContext);
  const handleInputChange = (e) => {
    const { id, value, type } = e.target;
    if (id.includes("id") || id.includes("Pais_dir"))
      setFormValues({ ...formValues, [id]: parseInt(value) });
    else setFormValues({ ...formValues, [id]: value });
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
    Ciudad_dir: 1,
    Estado_dir: 1,
    Pais_dir: 1,
    CodigoPostal_dir: "",
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
    setFormErrors(await validarForm(formValues));
    if (Object.keys(formErrors).length === 0) {
      await addData("personal/Cliente", formValues);
      formulario.reset();
      props.onHide();
    }
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
    console.log(formValues)
  };

  const [paises, setPaises] = useState([]);
  const [estados, setEstados] = useState([]);
  const [ciudades, setCiudades] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllData("pais");
        setPaises(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllData("estado");
        setEstados(data)
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllData("ciudad");
        setCiudades(data)
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const validarForm = async (form) => {
    const errors = {};
    if (form.Clave_usu !== form.passwordS || !form.Clave_usu || !form.passwordS)
      errors.Clave_usu = "Las contraseñas no coinciden";

    if (!form.Documento_ter)
      errors.Documento_ter = "Debe introducir su licencia de conducir";

    if (!esExtranjero) {
      const validarCedula = await fetch(
        `https://api.digital.gob.do/v3/cedulas/${form.Documento_ter}/validate`
      );
      const res = await validarCedula.json();
      console.log(res);
      if (res.valid == false)
        errors.Documento_ter = "Licencia de conducir inválida";
    }

    // if form.

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
              />
            </div>

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
            <label
              htmlFor={"Pais_dir"}
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              {"País de nacimiento"}
            </label>
            {
              <select
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id={"Pais_dir"}
                onChange={handleSelectChange}
              >
                {paises.map((option) => {
                  const values = Object.values(option);
                  const key = values[0]; // Obtener el primer valor del objeto
                  const descripcion = values[values.length - 1]; // Obtener el último valor del objeto
                  return (
                    <option key={key} data-key={key} value={descripcion}>
                      {descripcion}
                    </option>
                  );
                })}
              </select>
            }
            <p className="text-red-700 text-sm font-bold mb-2">
              {formErrors.Pais_dir}
            </p>

            <label
              htmlFor={"Estado_dir"}
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              {"Estado"}
            </label>
            {
              <select
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id={"Estado_dir"}
                onChange={handleSelectChange}
              >
                {estados.map((option) => {
                  const values = Object.values(option);
                  const key = values[0]; // Obtener el primer valor del objeto
                  const descripcion = values[values.length - 1]; // Obtener el último valor del objeto
                  return (
                    <option key={"pais"+key} data-key={key} value={descripcion}>
                      {descripcion}
                    </option>
                  );
                })}
              </select>
            }
            <p className="text-red-700 text-sm font-bold mb-2">
              {formErrors.Estado_dir}
            </p>
            <label
              htmlFor={"Ciudad_dir"}
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              {"Ciudad"}
            </label>
            {
              <select
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id={"Ciudad_dir"}
                onChange={handleSelectChange}
              >
                {ciudades.map((option) => {
                  const values = Object.values(option);
                  const key = values[0]; // Obtener el primer valor del objeto
                  const descripcion = values[values.length - 1]; // Obtener el último valor del objeto
                  return (
                    <option key={"ciudad"+key} data-key={key} value={descripcion}>
                      {descripcion}
                    </option>
                  );
                })}
              </select>
            }
            <p className="text-red-700 text-sm font-bold mb-2">
              {formErrors.Ciudad_dir}
            </p>

            <div key={"Fecha_Nacimiento_ter"}>
              <label
                htmlFor={"Fecha_Nacimiento_ter"}
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                {"Fecha de nacimiento"}
              </label>
              <p>{formErrors.Fecha_Nacimiento_ter}</p>
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
            </div><div>
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
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
};

export default RegisterPopUp;
