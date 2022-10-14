import React from 'react';

class Home extends React.Component {
    render() {
        return (
            <div> 
                <section class="section" id="about">
                    <div class="container">
                        <div class="row justify-content-between">
                            <div class="col-md-6 pr-md-5 mb-4 mb-md-0">
                                <h6 class="section-title mb-0">Vin'd art</h6>
                                <h6 class="section-subtitle mb-4">¿Quienes somos?</h6>
                                <p >Vin'd art es un proyecto colombiano interesado en cautivar a sus clientes por medio del aprovechamiento del cacao a través de la producción de insumos
                                    100% orgánico. </p>
                                <img src="../public/assets/imgs/cacao.png" alt="" class="w-100 mt-3 shadow-sm" />
                            </div>
                            <div class="col-md-6 pl-md-5">
                                <div class="row">
                                    <div class="col-12 mt-4">
                                        <p>Nuestros principales proveedores cumplen el estándar del "Mejor cacao del país". Nuestra cede ubicada en el departamento de Arauca, es la primera en especializarse
                                            en la producción de insumos orgánicos.
                                            Tenemos como misión principal informar, dar una oportunidad de desarrollo a la comunidad cacaotera, permitir a nuestros campesinos una forma de inversión efectiva y la expanción de proyectos de producción orgánica de forma nacional.
                                        </p>
                                        <p>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <nav class="navbar navbar-expand-sm navbar-dark bg-primary rounded shadow mb-3">
                    <div class="container">
                        <button class="navbar-brand" >Primary Color</button>
                        <button class="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item">
                                    <a class="nav-link" href="#about">About Us</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#service">Our Service</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#team">Our Team</a>
                                </li>
                                <li class="nav-item">
                                    <a href="#book-table" class="ml-4 mt-1 btn btn-light btn-sm">navbar button</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <section class="section" id="testmonial">
                    <div class="container">
                        <h6 class="section-title text-center mb-0">Referencias</h6>
                        <h6 class="section-subtitle mb-5 text-center">Lo que nuestros clientes piensan</h6>
                        <div class="row">
                            <div class="col-md-4 my-3 my-md-0">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="media align-items-center mb-3">
                                            <img class="mr-3" src="assets/imgs/avatar.jpg" alt="" />
                                            <div class="media-body">
                                                <h6 class="mt-1 mb-0">John Doe</h6>
                                                <small class="text-muted mb-0">Business Analyst</small>
                                            </div>
                                        </div>
                                        <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus enim modi, id dicta reiciendis itaque.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 my-3 my-md-0">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="media align-items-center mb-3">
                                            <img class="mr-3" src="assets/imgs/avatar-1.jpg" alt="" />
                                            <div class="media-body">
                                                <h6 class="mt-1 mb-0">Maria Garcia</h6>
                                                <small class="text-muted mb-0">Insurance Agent</small>
                                            </div>
                                        </div>
                                        <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus enim modi, id dicta reiciendis itaque.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 my-3 my-md-0">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="media align-items-center mb-3">
                                            <img class="mr-3" src="assets/imgs/avatar-2.jpg" alt="" />
                                            <div class="media-body">
                                                <h6 class="mt-1 mb-0">Mason Miller</h6>
                                                <small class="text-muted mb-0">Residential Appraiser</small>
                                            </div>
                                        </div>
                                        <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus enim modi, id dicta reiciendis itaque.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
};

export default Home;