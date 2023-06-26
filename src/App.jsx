import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MainRouter from "./Routers/MainRouter";
export default function App() {
  let [estado, setEstado] = useState(false);
  return (
    <>
      {/*<Navbar />
      <SobreNosotros />
  <Footer />*/}

      <MainRouter />
    </>
  );
}


