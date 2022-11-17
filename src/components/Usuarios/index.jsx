import Table from "../Table/Table";
import { getData } from "../../js/getData";
import MainPage from "../Table/MainPage";
import CreateButton from "../Table/CreateBotton";
import SearchBar from "../Table/SearchBar";

let objCss = {
    border: "6px solid red",
};

function UsuariosIndex(props) {
    let datosTabla = getData("url", {}, "get", {});
    //procesar datos
    return (
        <div>
            <h3>Usuarios</h3>
            <p style={objCss}>
                Bienvenidos a la pagina de administracion de usuarios
            </p>
            <MainPage
                data={datosTabla}
                path={"/usuarios"}
                name={"Tabla de Usuarios"}
                columns={["id", "firstName", "email", "username", "password"]}
                columnsAlias={[
                    "ID",
                    "Nombre",
                    "Correo",
                    "Usuario",
                    "Contrasena",
                ]}
                tools={["update", "delete"]}
            />
            {/* <div className="d-flex">
                <div className="col-6">
                    <Table />
                </div>
                <div className="col-6">
                    <Table />
                </div>
            </div> */}
        </div>
    );
}

export default UsuariosIndex;