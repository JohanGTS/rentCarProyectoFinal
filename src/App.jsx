import { useState } from "react";
import Boton from "./Components/Boton";
import FormRegistro from "./Components/FormRegistro";
import ItemNavbar from "./Components/ItemNavbar";
import Logo from "./Components/Logo";
import Navbar from "./Components/Navbar";
import Contacto from "./Pages/Contacto";
import { ButtonToolbar,Button } from "react-bootstrap";
import PopUp from "./Components/PopUp";

import 'bootstrap/dist/css/bootstrap.min.css';
export default function App() {
  let [estado, setEstado] = useState(false);
  return (
    <>
      <Navbar />
      <Contacto />
    </>
  );
}
