import logo from './logo.svg';
import './css/App.css';
// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Nosotros from "./components/Nosotros";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Nosotros/>
      <img src={logo} className="App-logo" alt="logo" />
      <Footer/>
    </div>
  );
}
export default App;;
