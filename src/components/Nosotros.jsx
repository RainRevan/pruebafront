import DivAngel from "./DivAngel.png";
import Adopcion from "./Adopcion.jpg";
function Nosotros(props) {
    return (
        <div className="mx-5 my-3">
            <div class="row featurette">
                <div class="col-md-6">
                    <h2 class="featurette-heading fw-normal lh-1"><span class="text-dark"> Nosotros</span></h2><br></br>
                    <p class="lead">El hogar de paso DivAngel, es una entidad sin ánimo de lucro, comprometida con promover mediante diferentes actividades la adopción responsable, la conciencia de esterilizar y recuperar animales en condición de maltrato y abandono con el fin de enseñar, contribuir y entregar una calidad de vida a todos los perros y gatos que lo necesiten.</p>
                </div>
                <div class="col-md-3">
                    <img src={DivAngel} className="newLogo" alt="logo" width="500" height="250" />
                </div>
            </div><br></br>
            <div class="row featurette">
                <div class="col-md-5">
                    <img src={Adopcion} className="newLogo" alt="logo" width="500" height="430" />
                </div>
                <div class="col-md-6">
                    <h2 class="featurette-heading fw-normal lh-1"><span class="text-dark">Historia</span></h2><br></br>
                    <p class="lead">Se inicio en el 2019 con el rescate de algunos animalitos, en 2021 se rescato a un gatico llamado Nemo con una condición muy especial (problemas en sus huesos, enanismo, dificultades respiratorias) fue un animal que se cuidó desde recién nacido.</p>
                    <p class="lead">Nemo fue la motivación para la creación del hogar de paso y las redes sociales, si bien en un inicio se contemplo buscar apoyo solo para él, con el pasar de los días se sumaron muchos más animalitos.</p>
                    <p class="lead">Hoy en día podemos decir se han rescatado multitud de perros y gatos en condiciones vulnerables, y se han formado bellas familias.</p>
                    <p class="lead">Pese a que Nemo no continua con nosotros es la motivación para luchar por aquellos seres que no pueden hablar, que habitan en las calles aguantando frio y hambre y que incluso han tenido un hogar, pero son abandonados ante dificultades económicas o falta de responsabilidad.</p>
                    <p class="lead">Acompáñanos para seguir escribiendo historias felices.</p>
                    <p class="lead">ADOPTA NO COMPRES.</p><br></br>
                </div>
            </div>
        </div>
    );
}
export default Nosotros;