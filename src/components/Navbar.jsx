import { Link } from "react-router-dom";
import LogButton from "./LogButton.jsx";
function Navbar(props) {
    return (
        <div className="mx-0 my-0">
            <div class="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom bg-primary">
                <a
                    href="/"
                    class="d-flex align-items-center text-dark text-decoration-none"
                >
                    <svg
                        xmlns="/.logo"
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
                </nav>
            </div>
        </div>
    );
}
export default Navbar;