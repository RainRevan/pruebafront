import DivAngel from "./DivAngel.png";
function Nosotros(props) {
    return (
        <div class="row featurette">
            <div class="col-md-6">
                <h2 class="featurette-heading fw-normal lh-1"><span class="text-dark"> Nosotros</span></h2>
                <p class="lead">El hogar de paso DivAngel, es una entidad sin ánimo de lucro, comprometida con promover mediante diferentes actividades la adopción responsable, la conciencia de esterilizar y recuperar animales en condición de maltrato y abandono con el fin de enseñar, contribuir y entregar una calidad de vida a todos los perros y gatos que lo necesiten.</p>
            </div>
            <div class="col-md-5">
            <img src={DivAngel} className="newLogo" alt="logo" width="500" height="400" />
            </div>
        </div>
    );
}
export default Nosotros;