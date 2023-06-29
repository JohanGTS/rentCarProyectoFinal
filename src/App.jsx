import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MainRouter from "./Routers/MainRouter";
import { UserContext } from "./Contexts/UserContext";
import AdminRouter from "./Routers/AdminRouter";
export default function App() {
  const [usuario, setUsuario] = useState(null);
  return (
      <UserContext.Provider value={{usuario, setUsuario}}>
       {usuario? <AdminRouter/>: <MainRouter/>}
      </UserContext.Provider>
  );
}
