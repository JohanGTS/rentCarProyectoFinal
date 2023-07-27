import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MainRouter from "./Routers/MainRouter";
import { UserContext } from "./Contexts/UserContext";

export default function App() {
  const [usuario, setUsuario] = useState(() => {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  });

  useEffect(() => {
    if (usuario) {
      localStorage.setItem("user", JSON.stringify(usuario));
    } else {
      localStorage.removeItem("user");
    }
  }, [usuario]);
  return (
    <UserContext.Provider value={{ usuario, setUsuario }}>
      <MainRouter />
    </UserContext.Provider>
  );
}
