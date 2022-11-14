function Dona(props) {
    return (
        <div className="mx-5 my-3">
            <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
                <h1 class="display-4 fw-normal">Membresías de apoyo</h1>
                <p class="fs-5 text-dark">Con tu apoyo mensual permitirás sostener a algunos de los animales y darles unas condiciones optimas en el hogar de paso, de paso incentivaras campañas de rescates y alianzas con otras organizaciones para salvar mas amigos peludos </p>
            </div>
            <main>
                <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
                    <div class="col">
                        <div class="card mb-4 rounded-3 shadow-sm">
                            <div class="card-header py-3">
                                <h4 class="my-0 fw-normal">Gratis</h4>
                            </div>
                            <div class="card-body">
                                <h1 class="card-title pricing-card-title">$0<small class="text-muted fw-light">/Mensual</small></h1>
                                <ul class="list-unstyled mt-3 mb-4">
                                    <li>Acceso a la página y actualizaciones</li>
                                    <li>Presencia de publicidad</li>
                                    <li>Capacidad de contactarse con nosotros</li>
                                    <li>Información de los animales</li>
                                </ul>
                                <button type="button" class="w-100 btn btn-lg btn-outline-primary">Registrate</button>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card mb-4 rounded-3 shadow-sm">
                            <div class="card-header py-3">
                                <h4 class="my-0 fw-normal">Angel</h4>
                            </div>
                            <div class="card-body">
                                <h1 class="card-title pricing-card-title">$30.000<small class="text-muted fw-light">/Mensual</small></h1>
                                <ul class="list-unstyled mt-3 mb-4">
                                    <li>Acceso a todo el contenido</li>
                                    <li>Posibilidad de visitar a los animales</li>
                                    <li>Regalo mensual</li>
                                    <li>Contacto directo y permanente</li>
                                </ul>
                                <button type="button" class="w-100 btn btn-lg btn-primary">Iniciemos</button>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card mb-4 rounded-3 shadow-sm border-primary">
                            <div class="card-header py-3 text-bg-primary border-primary">
                                <h4 class="my-0 fw-normal">Corporativo</h4>
                            </div>
                            <div class="card-body">
                                <h1 class="card-title pricing-card-title">$50.000<small class="text-muted fw-light">/Mensual</small></h1>
                                <ul class="list-unstyled mt-3 mb-4">
                                    <li>Publicidad permanente dentro de la página</li>
                                    <li>Alianzas estrategicas</li>
                                    <li>Colaboración y apoyo</li>
                                    <li>Participaras en un evento mensual de integración</li>
                                </ul>
                                <button type="button" class="w-100 btn btn-lg btn-primary">Contáctanos</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
export default Dona;