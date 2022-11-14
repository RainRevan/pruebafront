import Producto1 from "./Imagenes/Producto1.png";
import Producto2 from "./Imagenes/Producto2.png";
import Producto3 from "./Imagenes/Producto3.png";
import Producto4 from "./Imagenes/Producto4.png";
import Producto5 from "./Imagenes/Producto5.png";
import Producto6 from "./Imagenes/Producto6.png";
import Producto7 from "./Imagenes/Producto7.png";
import Producto8 from "./Imagenes/Producto8.png";
import Producto9 from "./Imagenes/Producto9.png";

function Tienda(props) {
    return (
        <main>

            <section class="py-2 text-center container">
                <div class="row py-lg-1">
                    <div class="col-lg-6 col-md-8 mx-auto">
                        <h1 class="fw-light">Página de la tienda</h1>
                        <p class="lead text-muted">A continuación, puedes ver los productos que tenemos disponibles.</p>
                    </div>
                </div>
            </section>

            <div class="album py-5 bg-light">
                <div class="container">

                    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        <div class="col">
                            <div class="card shadow-sm">
                                <img class="bd-placeholder-img card-img-top" src={Producto1} className="newLogo" alt="logo" width="100%" height="350" preserveAspectRatio="xMidYMid slice" focusable="false" />

                                <div class="card-body">
                                    <p class="card-text" style={{ textAlign: "justify" }}>Hermosas pantuflas babuchas con suela ancha espumosa super comoda ideal para estar en casa, 3 colores disponibles
                                        Recuerda que debes elegir una talla adicional a que normalmente eres ya que la horma de la pantufla es pequeña

                                    </p>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="btn-group">
                                            <button type="button" class="btn btn-sm btn-outline-secondary">Ver</button>
                                            <button type="button" class="btn btn-sm btn-outline-secondary">Editar</button>
                                        </div>
                                        <mark class="text-success">$60.000</mark>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card shadow-sm">
                                <img class="bd-placeholder-img card-img-top" src={Producto2} className="newLogo" alt="logo" width="100%" height="350" preserveAspectRatio="xMidYMid slice" focusable="false" />

                                <div class="card-body">
                                    <p class="card-text" style={{ textAlign: "justify" }}>Hermoso pocillo con cuchara en forma de gato, su interior es blanco.
                                        Color negro con detalles rosa-dorados, su agarrable es en forma irregular
                                        El tamaño es grande porción mayor a una tasa de cafe media
                                        en la parte de atras tiene silueta de colita de gato
                                    </p>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="btn-group">
                                            <button type="button" class="btn btn-sm btn-outline-secondary">Ver</button>
                                            <button type="button" class="btn btn-sm btn-outline-secondary">Editar</button>
                                        </div>
                                        <mark class="text-success">$50.000</mark>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card shadow-sm">
                                <img class="bd-placeholder-img card-img-top" src={Producto3} className="newLogo" alt="logo" width="100%" height="350" preserveAspectRatio="xMidYMid slice" focusable="false" />

                                <div class="card-body">
                                    <p class="card-text" style={{ textAlign: "justify" }}>Sombrilla manual tamaño grande colores pastel, para la protección de esos días lluviosos y soleados.
                                        • tela anti-fluido para un secado rápido
                                        • colores: azul cielo - lila - rosa - azul oscura- rosada clara.
                                        • 113cm de apertura, 27cm cerrada
                                    </p>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="btn-group">
                                            <button type="button" class="btn btn-sm btn-outline-secondary">Ver</button>
                                            <button type="button" class="btn btn-sm btn-outline-secondary">Editar</button>
                                        </div>
                                        <mark class="text-success">$45.000</mark>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col">
                            <div class="card shadow-sm">
                                <img class="bd-placeholder-img card-img-top" src={Producto4} className="newLogo" alt="logo" width="100%" height="350" preserveAspectRatio="xMidYMid slice" focusable="false" />

                                <div class="card-body">
                                    <p class="card-text" style={{ textAlign: "justify" }}>Placas en forma de hueso en Acero Brillante
                                        Personaliza tus placas en Grabado Láser
                                        con el nombre de tu mascota y la imagen de la raza por un lado
                                        y por la otro con tú número de teléfono
                                        Medidas:
                                        Largo : 5 cm
                                        Ancho : 2,8 cm</p>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="btn-group">
                                            <button type="button" class="btn btn-sm btn-outline-secondary">Ver</button>
                                            <button type="button" class="btn btn-sm btn-outline-secondary">Editar</button>
                                        </div>
                                        <mark class="text-success">$30.000</mark>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card shadow-sm">
                                <img class="bd-placeholder-img card-img-top" src={Producto5} className="newLogo" alt="logo" width="100%" height="350" preserveAspectRatio="xMidYMid slice" focusable="false" />

                                <div class="card-body">
                                    <p class="card-text" style={{ textAlign: "justify" }}>Hermosos buzos con capota de superhéroes para perros pequeños y medianos.
                                        Elaborado en algodón perchado mónaco.
                                        Sin botones delanteros.
                                        Agujero para sacar la correa.
                                        Estampado de alta calidad en DTF.
                                        Prenda de fabricación nacional.</p>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="btn-group">
                                            <button type="button" class="btn btn-sm btn-outline-secondary">Ver</button>
                                            <button type="button" class="btn btn-sm btn-outline-secondary">Editar</button>
                                        </div>
                                        <mark class="text-success">$60.000</mark>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card shadow-sm">
                                <img class="bd-placeholder-img card-img-top" src={Producto6} className="newLogo" alt="logo" width="100%" height="350" preserveAspectRatio="xMidYMid slice" focusable="false" />

                                <div class="card-body">
                                    <p class="card-text" style={{ textAlign: "justify" }}>Tula Deportiva Impermeable - 3souls
                                        • Elaborada en material impermeable
                                        • Trae bolsillo auxiliar en el posterior con cierre en cremallera
                                        • Cordón ajustable, elástico, redondo, grueso para mejor comodidad y carga,
                                        • Dimensiones 50 x 36 cms</p>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="btn-group">
                                            <button type="button" class="btn btn-sm btn-outline-secondary">Ver</button>
                                            <button type="button" class="btn btn-sm btn-outline-secondary">Editar</button>
                                        </div>
                                        <mark class="text-success">$45.000</mark>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col">
                            <div class="card shadow-sm">
                                <img class="bd-placeholder-img card-img-top" src={Producto7} className="newLogo" alt="logo" width="100%" height="350" preserveAspectRatio="xMidYMid slice" focusable="false" />

                                <div class="card-body">
                                    <p class="card-text" style={{ textAlign: "justify" }}>Sigues buscando una linda luz nocturna para la habitación de tu hijo?
                                        Estamos seguros de que a todos los amantes de los gatos, niños pequeños y adultos les encantará esta pequeña luz de noche con forma de gato. cambian de colores con un pequeño golpe, brinda luz led de colores, puedes llevarla a todos lados y divertirte con su forma y calidez, es muy liviana y acogedora</p>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="btn-group">
                                            <button type="button" class="btn btn-sm btn-outline-secondary">Ver</button>
                                            <button type="button" class="btn btn-sm btn-outline-secondary">Editar</button>
                                        </div>
                                        <mark class="text-success">$65.000</mark>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card shadow-sm">
                                <img class="bd-placeholder-img card-img-top" src={Producto8} className="newLogo" alt="logo" width="100%" height="350" preserveAspectRatio="xMidYMid slice" focusable="false" />

                                <div class="card-body">
                                    <p class="card-text" style={{ textAlign: "justify" }}>Music Animal
                                        Mini Altavoz Bluetooth con forma de animales Usb Recargable 6 Modelos diferentes para elegir Distancia de trabajo de hasta 10 metros. Compatible con todos los dispositivos Bluetooth como teléfonos inteligentes, tablet, iPOD, etc. Chip Bluetooth, sonido claro y calidad perfecta, puede disfrutar de música estéreo en cualquier momento. Incluye correa para colgar y Cable Usb para Recarga.</p>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="btn-group">
                                            <button type="button" class="btn btn-sm btn-outline-secondary">Ver</button>
                                            <button type="button" class="btn btn-sm btn-outline-secondary">Editar</button>
                                        </div>
                                        <mark class="text-success">$45.000</mark>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card shadow-sm">
                                <img class="bd-placeholder-img card-img-top" src={Producto9} className="newLogo" alt="logo" width="100%" height="350" preserveAspectRatio="xMidYMid slice" focusable="false" />

                                <div class="card-body">
                                    <p class="card-text" style={{ textAlign: "justify" }}>ARETES PARA MUJER EN PLATA 925
                                        - Aretes para mujer.
                                        - Fabricados en plata 925.
                                        - Cristales austriacos.
                                        - Incluye estuche.
                                        - Joyería de diseño actual.
                                        - Producto importado.
                                        - Accesorio ideal para regalos especiales.
                                        - Envíos a todo el país.
                                        - Realice su compra con tiempo, no nos hacemos responsables por demoras en la entrega por causa de la empresa transportadora u otros motivos ajenos a nosotros.
                                    </p>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="btn-group">
                                            <button type="button" class="btn btn-sm btn-outline-secondary">Ver</button>
                                            <button type="button" class="btn btn-sm btn-outline-secondary">Editar</button>
                                        </div>
                                        <mark class="text-success">$60.000</mark>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </main>
    );
}
export default Tienda;