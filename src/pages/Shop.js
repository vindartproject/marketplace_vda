import React from "react";

class Shop extends React.Component {

    render() {
        return (
            <main data-spy="scroll" data-target=".navbar" data-offset="40" id="home">


                <nav class="navbar custom-navbar navbar-expand-md navbar-light fixed-top" data-spy="affix" data-offset-top="10">
                    <div class="container">
                        <a class="navbar-brand" href="index.html">
                            <img src="assets/imgs/logo2.png" alt=""/>
                        </a>
                        <button class="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item">
                                    <a class="nav-link" href="Tienda.html">Tienda</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#blog">Blogs</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#contact">Contacto</a>
                                </li>
                                <li class="nav-item">
                                    <a href="components.html" class="ml-4 nav-link btn btn-primary btn-sm rounded">Components</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <section id="portfolio" class="section portfolio-section">
                    <div class="container">
                        <h6 class="section-title text-center">Nuestros Productos</h6>
                        <h6 class="section-subtitle mb-5 text-center">Productos 100% naturales, pensados para satisfacer el deseo de todos nuestros clientes.</h6>
                        <div class="filters">
                            <a href="#" data-filter=".new" class="active">
                                Todos
                            </a>
                            <a href="#" data-filter=".advertising">
                                Vinos
                            </a>
                            <a href="#" data-filter=".branding">
                                Chocolates
                            </a>
                            <a href="#" data-filter=".web">
                                Postres
                            </a>
                        </div>
                        <div class="portfolio-container">
                            <div class="col-md-6 col-lg-4 web new">
                                <div class="portfolio-item">
                                    <img src="assets/imgs/image2.jpeg" class="img-fluid" alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates"/>
                                        <div class="content-holder">
                                            <a class="img-popup" href="assets/imgs/image2.jpeg"></a>
                                            <div class="text-holder">
                                                <h6 class="title">WEB</h6>
                                                <p class="subtitle">Expedita corporis doloremque velit in totam!</p>
                                            </div>
                                        </div>
                                </div>
                            </div>

                            <div class="col-md-6 col-lg-4 advertising new">
                                <div class="portfolio-item">
                                    <img src="assets/imgs/Proyecto vindart.png" class="img-fluid" alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates"/>
                                        <div class="content-holder">
                                            <a class="img-popup" href="assets/imgs/Proyecto vindart.png"></a>
                                            <div class="text-holder">
                                                <h6 class="title">ADVERSTISING</h6>
                                                <p class="subtitle">Expedita corporis doloremque velit in totam!</p>
                                            </div>
                                        </div>
                                </div>
                            </div>

                            <div class="col-md-6 col-lg-4 advertising">
                                <div class="portfolio-item">
                                    <img src="assets/imgs/Sidra_asturiana-removebg-preview (1).png" class="img-fluid" alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates"/>
                                        <div class="content-holder">
                                            <a class="img-popup" href="assets/imgs/Sidra_asturiana-removebg-preview (1).png"></a>
                                            <div class="text-holder">
                                                <h6 class="title">ADVERSITING</h6>
                                                <p class="subtitle">Expedita corporis doloremque velit in totam!</p>
                                            </div>
                                        </div>
                                </div>
                            </div>

                            <div class="col-md-6 col-lg-4 branding">
                                <div class="portfolio-item">
                                    <img src="assets/imgs/fondo-textura-tablero-madera-vieja_124541-194 (5).png" class="img-fluid" alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates"/>
                                        <div class="content-holder">
                                            <a class="img-popup" href="assets/imgs/fondo-textura-tablero-madera-vieja_124541-194 (5).png"></a>
                                            <div class="text-holder">
                                                <h6 class="title">BRANDING</h6>
                                                <p class="subtitle">Expedita corporis doloremque velit in totam!</p>
                                            </div>
                                        </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-4 branding new">
                                <div class="portfolio-item">
                                    <img src="assets/imgs/fondo-textura-tablero-madera-vieja_124541-194.png" class="img-fluid" alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates"/>
                                        <div class="content-holder">
                                            <a class="img-popup" href="assets/imgs/fondo-textura-tablero-madera-vieja_124541-194.png"></a>
                                            <div class="text-holder">
                                                <h6 class="title">BRANDING</h6>
                                                <p class="subtitle">Expedita corporis doloremque velit in totam!</p>
                                            </div>
                                        </div>
                                </div>
                            </div>

                            <div class="col-md-6 col-lg-4 web new">
                                <div class="portfolio-item">
                                    <img src="assets/imgs/image0.jpeg" class="img-fluid" alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates"/>
                                        <div class="content-holder">
                                            <a class="img-popup" href="assets/imgs/image0.jpeg"></a>
                                            <div class="text-holder">
                                                <h6 class="title">WEB</h6>
                                                <p class="subtitle">Expedita corporis doloremque velit in totam!</p>
                                            </div>
                                        </div>
                                </div>
                            </div>

                            <div class="col-md-6 col-lg-4 branding new">
                                <div class="portfolio-item">
                                    <img src="assets/imgs/fondo-textura-tablero-madera-vieja_124541-194 (4).png" class="img-fluid" alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates"/>
                                        <div class="content-holder">
                                            <a class="img-popup" href="assets/imgs/fondo-textura-tablero-madera-vieja_124541-194 (4).png"></a>
                                            <div class="text-holder">
                                                <h6 class="title">BRANDING</h6>
                                                <p class="subtitle">Expedita corporis doloremque velit in totam!</p>
                                            </div>
                                        </div>
                                </div>
                            </div>

                            <div class="col-md-6 col-lg-4 branding">
                                <div class="portfolio-item">
                                    <img src="assets/imgs/fondo-textura-tablero-madera-vieja_124541-194 (2).png" class="img-fluid" alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates"/>
                                        <div class="content-holder">
                                            <a class="img-popup" href="assets/imgs/fondo-textura-tablero-madera-vieja_124541-194 (2).png"></a>
                                            <div class="text-holder">
                                                <h6 class="title">BRANDING</h6>
                                                <p class="subtitle">Expedita corporis doloremque velit in totam!</p>
                                            </div>
                                        </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-4 branding">
                                <div class="portfolio-item">
                                    <img src="assets/imgs/fondo-textura-tablero-madera-vieja_124541-194 (3).png" class="img-fluid" alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates"/>
                                        <div class="content-holder">
                                            <a class="img-popup" href="assets/imgs/fondo-textura-tablero-madera-vieja_124541-194 (3).png"></a>
                                            <div class="text-holder">
                                                <h6 class="title">BRANDING</h6>
                                                <p class="subtitle">Expedita corporis doloremque velit in totam!</p>
                                            </div>
                                        </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-4 branding">
                                <div class="portfolio-item">
                                    <img src="assets/imgs/fondo-textura-tablero-madera-vieja_124541-194 (1).png" class="img-fluid" alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates"/>
                                        <div class="content-holder">
                                            <a class="img-popup" href="assets/imgs/fondo-textura-tablero-madera-vieja_124541-194 (1).png"></a>
                                            <div class="text-holder">
                                                <h6 class="title">BRANDING</h6>
                                                <p class="subtitle">Expedita corporis doloremque velit in totam!</p>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <script src="assets/vendors/jquery/jquery-3.4.1.js"></script>
                <script src="assets/vendors/bootstrap/bootstrap.bundle.js"></script>


                <script src="assets/vendors/bootstrap/bootstrap.affix.js"></script>


                <script src="assets/vendors/isotope/isotope.pkgd.js"></script>

                <script src="assets/js/leadmark.js"></script>
            </main>
        )
    }
};

export default Shop;