import { Link } from "react-router-dom";
import LogButton from "./LogButton.jsx";
function Navbar(props) {
    return (
        <div className="mx-5 my-3">
            <div class="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
                <a
                    href="/"
                    class="d-flex align-items-center text-dark text-decoration-none"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="32"
                        class="me-2"
                        viewBox="0 0 118 94"
                        role="img"
                    >
                        <title>Hogar de paso DivAngel</title>
                    </svg>
                    <span class="fs-4">
                        <Link to={"/"}>Home</Link>
                    </span>
                </a>

                <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
                    <Link
                        to={"/Nosotros"}
                        className="me-3 py-2 text-dark text-decoration-none"
                    >
                        Nosotros
                    </Link>
                    <Link
                        to={"/"}
                        className="me-3 py-2 text-dark text-decoration-none"
                    >
                        Categorias
                    </Link>
                    <Link
                        to={"/"}
                        className="me-3 py-2 text-dark text-decoration-none"
                    >
                        Usuarios
                    </Link>
                    <Link
                        to={"/"}
                        className="me-3 py-2 text-dark text-decoration-none"
                    >
                        Nosotros
                    </Link>
                    <Link
                        to={"/"}
                        className="me-3 py-2 text-dark text-decoration-none"
                    >
                        Ejemplos
                    </Link>
                    <LogButton logged={props.logged} />
                </nav>
            </div>
        </div>
    );
}
export default Navbar;