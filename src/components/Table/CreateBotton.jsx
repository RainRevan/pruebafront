import { Link } from "react-router-dom";

function CreateButton(props) {
    let url = props.path + "/createUsuario";
    return (
        <Link to={url}>
            <button className="btn btn-success ms-5">Crear</button>
        </Link>
    );
}
export default CreateButton;