import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navegacion from "./components/jsx/Navegacion";
import CrearUsuarios from "./components/jsx/CrearUsuarios";
import ListaUsuarios from "./components/jsx/ListaUsuarios";
import EditarUsuario from "./components/jsx/EditarUsuario";

function App() {
  return (
    <div className="">
      <Navegacion />
      <div className="container p-4">
        <Routes>
          <Route path="/" element={<ListaUsuarios />} />
          <Route path="/CrearUsuario" element={<CrearUsuarios />} />
          <Route path="/editarUsuario/:id" element={<EditarUsuario />} />
          <Route path="/edit/:id" element={<CrearUsuarios />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
