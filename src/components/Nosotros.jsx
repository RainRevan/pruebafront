import DivAngel from "./Imagenes/DivAngel.png";
import Adopcion from "./Imagenes/Adopcion.jpg";
function Nosotros(props) {
    return (
        <div className="mx-5 my-3">
            <div class="row featurette">
                <div class="col-md-7">
                    <h1 class="featurette-heading fw-normal lh-1" style={{ textAlign: "center" }}><span class="text-dark"> Nosotros</span></h1><br></br>
                    <p class="lead" style={{ textAlign: "justify" }}>El hogar de paso DivAngel, es una entidad sin ánimo de lucro, comprometida con promover mediante diferentes actividades la adopción responsable, la conciencia de esterilizar y recuperar animales en condición de maltrato y abandono con el fin de enseñar, contribuir y entregar una calidad de vida a todos los perros y gatos que lo necesiten.</p>
                </div>
                <div class="col-md-3">
                    <img src={DivAngel} className="newLogo" alt="logo" width="500" height="250" />
                </div>
            </div><br></br>
            <div class="row featurette">
                <div class="col-md-5">
                    <br></br><br></br><img src={Adopcion} className="newLogo" alt="logo" width="500" height="500" /><br></br>
                </div>
                <div class="col-md-7">
                    <h1 class="featurette-heading fw-normal lh-1"><span class="text-dark">Historia</span></h1><br></br>
                    <p class="lead" style={{ textAlign: "justify" }} >Se inicio en el 2019 con el rescate de algunos animalitos, en 2021 se rescato a un gatico llamado Nemo con una condición muy especial (problemas en sus huesos, enanismo, dificultades respiratorias) fue un animal que se cuidó desde recién nacido.</p>
                    <p class="lead" style={{ textAlign: "justify" }}>Nemo fue la motivación para la creación del hogar de paso y las redes sociales, si bien en un inicio se contemplo buscar apoyo solo para él, con el pasar de los días se sumaron muchos más animalitos.</p>
                    <p class="lead" style={{ textAlign: "justify" }}>Hoy en día podemos decir se han rescatado multitud de perros y gatos en condiciones vulnerables, y se han formado bellas familias.</p>
                    <p class="lead" style={{ textAlign: "justify" }}>Pese a que Nemo no continua con nosotros es la motivación para luchar por aquellos seres que no pueden hablar, que habitan en las calles aguantando frio y hambre y que incluso han tenido un hogar, pero son abandonados ante dificultades económicas o falta de responsabilidad.</p>
                    <p class="lead" style={{ textAlign: "justify" }}>Acompáñanos para seguir escribiendo historias felices.</p>
                    <p class="lead" style={{ textAlign: "justify" }}>ADOPTA NO COMPRES.</p><br></br>
                </div>
            </div>
            <div>
                <h1 class="featurette-heading fw-normal lh-1" style={{ textAlign: "center" }}><span class="text-dark"> Misión</span></h1><br></br>
                <p class="lead" style={{ textAlign: "justify" }}>El hogar de paso DivAngel, es una entidad sin ánimo de lucro, comprometida con promover mediante diferentes actividades la adopción responsable, la conciencia de esterilizar y recuperar animales en condición de maltrato y abandono con el fin de enseñar, contribuir y entregar una calidad de vida a todos los perros y gatos que lo necesiten.</p>
                <h1 class="featurette-heading fw-normal lh-1" style={{ textAlign: "center" }}><span class="text-dark"> Visión</span></h1><br></br>
                <p class="lead" style={{ textAlign: "justify" }}>Queremos ser reconocidos a nivel mundial por el impacto generado no solo a todos aquellos animales que fueron rescatados, sino a toda la sociedad por generar conocimiento y consciencia acerca de la importancia de esterilizar, y de la responsabilidad de tener un perro y/o gato en nuestro hogar.</p><br></br>
            </div>
        </div>

    );
}
export default Nosotros;