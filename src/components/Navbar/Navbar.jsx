import DivAngel from "./DivAngel.png";
import { Link } from "react-router-dom";
import LogButton from "./LogButton.jsx";
function Navbar(props) {
    return (
        <header class="p-1 text-bg-primary">
            <div class="container">
                <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <a
                        href="/"
                        class="d-flex align-items-center text-dark text-decoration-none"
                    >
                        <img src={DivAngel} className="newLogo" alt="logo" width="200" height="100" />
                        <png
                            xmlns="/.DivAngel"
                            width="100"
                            height="100"
                            class="me-2"
                            viewBox="0 0 180 180"
                            role="img"
                        >
                            <title>Hogar de paso DivAngel</title>
                        </png>
                        <span class="fs-4">
                            <Link to={"/Home"}></Link>
                        </span>
                    </a>

                    <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                        <input type="search" class="form-control form-control-dark text-bg-dark" placeholder="Buscar...." aria-label="Buscar"></input>
                    </form>
                    <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
                        <Link
                            to={"/Nosotros"}
                            className="me-3 py-2 text-dark text-decoration-none"
                        >
                            Nosotros
                        </Link>
                        <Link
                            to={"/Adopta"}
                            className="me-3 py-2 text-dark text-decoration-none"
                        >
                            Adopta
                        </Link>
                        <Link
                            to={"/Dudas"}
                            className="me-3 py-2 text-dark text-decoration-none"
                        >
                            Dudas
                        </Link>
                        <Link
                            to={"/Tienda"}
                            className="me-3 py-2 text-dark text-decoration-none"
                        >
                            Tienda
                        </Link>
                        <Link
                            to={"/Contacto"}
                            className="me-3 py-2 text-dark text-decoration-none"
                        >
                            Contacto
                        </Link>
                        <Link
                            to={"/Dona"}
                            className="me-3 py-2 text-dark text-decoration-none"
                        >
                            Dona
                        </Link>
                        <LogButton logged={props.logged} />
                        <Link
                            to={"/usuarios"}
                            className="me-3 py-2 text-dark text-decoration-none"
                        >
                            Usuarios
                        </Link>
                    </nav>

                    <div class="text-end">
                        <button type="button" class="btn btn-warning">Registrarme</button>
                    </div>
                </div>
            </div>
        </header>
    );
}
export default Navbar;