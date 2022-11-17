import './css/App.css';
// Components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Nosotros from "./components/Nosotros";
import Home from "./components/Home";
import Adopta from "./components/Adopta";
import Dudas from "./components/Dudas";
import Tienda from "./components/Tienda";
import Contacto from "./components/Contacto";
import Dona from "./components/Dona";
import UsuariosIndex from "./components/Usuarios";
import CreateUsuario from "./components/Usuarios/createUsuario";
import ActualizarUsuario from "./components/Usuarios/actualizarUsuario";
import EliminarUsuario from "./components/Usuarios/eliminarUsuario";
import LoginView from "./components/Usuarios/login";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <div className="App">
        <Navbar logged={false} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Nosotros" element={<Nosotros />} />
          <Route path="/Adopta" element={<Adopta />} />
          <Route path="/Dudas" element={<Dudas />} />
          <Route path="/Tienda" element={<Tienda />} />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="/Dona" element={<Dona />} />
          <Route path="/Usuarios/login" element={<LoginView />} />
          <Route path="/Usuarios" element={<UsuariosIndex />} />
          <Route
            path="/Usuarios/createUsuario"
            element={<CreateUsuario />}
          />
          <Route
            path="/Usuarios/update/:idUsuario"
            element={<ActualizarUsuario />}
          />
          <Route
            path="/Usuarios/delete/:idUsuario"
            element={<EliminarUsuario />}
          />
          <Route path="/Usuarios/login" element={<LoginView />} />
        </Routes>
        <Footer />
      </div >
    </div>
  );
}
export default App;;
