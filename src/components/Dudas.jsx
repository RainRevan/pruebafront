import pregunta from "./Imagenes/pregunta.png";
function Dudas(props) {
    return (
        <div className="mx-5 my-3">
            <div class="row featurette">
                <div class="col-md-7">
                    <h1 class="featurette-heading fw-normal lh-1" style={{ textAlign: "center" }}><span class="text-dark"> ¿Tienes dudas?</span></h1><br></br>
                    <p class="lead" style={{ textAlign: "justify" }}>El hogar de paso DivAngel, es una entidad sin ánimo de lucro, comprometida con promover mediante diferentes actividades la adopción responsable, la conciencia de esterilizar y recuperar animales en condición de maltrato y abandono con el fin de enseñar, contribuir y entregar una calidad de vida a todos los perros y gatos que lo necesiten.
                    En nuestros procesos de adopción nunca se solicitara dinero ni nada por el estilo, y es necesario llenar un formulario en donde podamos conocer un poco mas de ti para tener tranquilidad sobre la sostenibilidad y buen vida del animalito a futuro.</p>
                </div>
                <div class="col-md-3">
                    <img src={pregunta} className="newLogo" alt="logo" width="500" height="480" />
                </div>
            </div><br></br>
        </div>

    );
}
export default Dudas;