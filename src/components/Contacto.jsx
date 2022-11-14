function Contacto(props) {
    return (
        <div className="mx-5 my-5">
            <section class="mb-4">
                <h1 class="h1-responsive font-weight-bold text-center my-4">Contáctanos</h1><br></br>
                <p class="text-center w-responsive mx-auto mb-5">¿Tienes alguna pregunta?
                    Por favor escríbenos de forma directa o por medio de las redes sociales, estaremos pendientes ara contestarte lo más rápido posible.</p>
                    <p>Cordialmente Hogar de paso DivAngel.</p><br></br>
                <div class="row">

                    <div class="col-md-9 mb-md-0 mb-5">
                        <form id="contact-form" name="contact-form" action="mail.php" method="POST">

                            <div class="row">

                                <div class="col-md-6">
                                    <div class="md-form mb-0">
                                        <input type="text" id="name" name="name" class="form-control"></input>
                                        <label for="name" class="">Tu Nombre</label>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="md-form mb-0">
                                        <input type="text" id="email" name="email" class="form-control"></input>
                                        <label for="email" class="">Tu Correo</label>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="md-form mb-0">
                                        <input type="text" id="subject" name="subject" class="form-control"></input>
                                        <label for="subject" class="">Tema</label>
                                    </div>
                                </div>
                            </div>

                            <div class="row">

                                <div class="col-md-12">

                                    <div class="md-form">
                                        <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                                        <label for="message">Tu mensaje</label>
                                    </div>
                                </div>
                            </div>
                        </form>

                        <div class="text-center text-md-left">
                            <a class="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Enviar</a>
                        </div>
                        <div class="status"></div>
                    </div>

                    <div class="col-md-3 text-center">
                        <ul class="list-unstyled mb-0">
                            <li><i class="fas fa-map-marker-alt fa-2x"></i>
                                <p>Bogotá D.C., COLOMBIA,</p>
                            </li>

                            <li><i class="fas fa-phone mt-4 fa-2x"></i>
                                <p>(+57)3222621457</p>
                            </li>

                            <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                                <p>Divangel@gmail.com</p>
                            </li>
                            <br></br><br></br><br></br>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default Contacto;