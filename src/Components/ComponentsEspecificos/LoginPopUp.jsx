import React, { useContext, useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../Contexts/UserContext";
import { pagoTarjeta } from "../../Features/apiCalls";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const LoginPopUp = (props) => {
  const [formValues, setFormValues] = useState({});
  const { usuario, setUsuario } = useContext(UserContext);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const MySwal = withReactContent(Swal);

  useEffect(() => {
    //navigate("/dashboard");

    const auxUser = usuario;
    console.log(usuario);
  }, [usuario]);

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const MySwal = withReactContent(Swal);
    const form = e.target;
    const user = form.usuario.value;
    const password = form.password.value;
    const data = {
      usuario: user,
      pass: password,
    };
    try {
      const response = await pagoTarjeta("personal/getusuario", data);

      if (response[0].Correo_ter) {
        form.reset();
        await setUsuario(response[0]);
        console.log(response[0]);
        console.log(usuario);
        navigate("/dashboard");
      } else {
        MySwal.fire({
          icon: "error",
          title: "Usuario o contraseña inválido",
          text: "Verifique los datos y vuelva a intentar",
          showConfirmButton: true,
        });
      }
    } catch (error) {
      console.error("Error al llamar al API:", error);
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
        <Modal.Title id="contained-modal-title-vcenter">
          Iniciar sesión
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div key={"usuario"}>
              <label
                htmlFor={"usuario"}
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                {"Usuario"}
              </label>
              <input
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                type={"text"}
                id={"usuario"}
                name={"usuario"}
                placeholder={"Ingrese su usuario"}
                required
                onChange={handleInputChange}
              />
            </div>
            <div key={"password"}>
              <label
                htmlFor={"password"}
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                {"Contraseña"}{" "}
              </label>
              <input
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                type={"password"}
                id={"password"}
                name={"password"}
                placeholder={"Contraseña"}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex justify-end">
              <button
                className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 mx-2 rounded"
                type="submit"
              >
                Login
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

export default LoginPopUp;
