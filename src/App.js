import logo from './logo.svg';
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

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Nosotros" element={<Nosotros />} />
        <Route path="/Adopta" element={<Adopta />} />
        <Route path="/Dudas" element={<Dudas />} />
        <Route path="/Tienda" element={<Tienda />} />
        <Route path="/Contacto" element={<Contacto />} />
        <Route path="/Dona" element={<Dona />} />
      </Routes>
      <Footer />
    </div >
  );
}
export default App;;
