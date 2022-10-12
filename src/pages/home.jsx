import React from "react";

class Home extends React.Component{
    render(){
        return(
            <div>

    <header class="header">
        <div class="overlay">
            <h1 class="subtitle">Un proyecto</h1>
            <h1 class="title">Innovador</h1>  
        </div>  
        <div class="shape">
            <svg viewBox="0 0 1500 200">
                <path d="m 0,240 h 1500.4828 v -71.92164 c 0,0 -286.2763,-81.79324 -743.19024,-81.79324 C 300.37862,86.28512 0,168.07836 0,168.07836 Z"/>
            </svg>
        </div>  
        <div class="mouse-icon" ><div class="wheel" href="#about"></div></div>
    </header>

    <section class="section" id="about">
        <div class="container">
            <div class="row justify-content-between">
                <div class="col-md-6 pr-md-5 mb-4 mb-md-0">
                    <h6 class="section-title mb-0">Vin'd art</h6>
                    <h6 class="section-subtitle mb-4">¿Quienes somos?</h6>
                    <p >Vin'd art es un proyecto colombiano interesado en cautivar a sus clientes por medio del aprovechamiento del cacao a través de la producción de insumos 
                        100% orgánico. </p>
                    <img src="../public/assets/imgs/cacao.png" alt="" class="w-100 mt-3 shadow-sm"/>
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
                                <img class="mr-3" src="assets/imgs/avatar.jpg" alt=""/>
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
                                <img class="mr-3" src="assets/imgs/avatar-1.jpg" alt=""/>
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
                                <img class="mr-3" src="assets/imgs/avatar-2.jpg" alt=""/>
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

    <section id="contact" class="section has-img-bg pb-0">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-md-5 my-3">
                    <h6 class="mb-0">Phone</h6>
                    <p class="mb-4">+57 321 990 83 88</p>

                    <h6 class="mb-0">Address</h6>
                    <p class="mb-4">12345 Fake ST NoWhere AB Country</p>

                    <h6 class="mb-0">Email</h6>
                    <p class="mb-0">info@website.com</p>
                    <p></p>
                </div>
                <div class="col-md-7">
                    <form>
                        <h4 class="mb-4">Drop Us A Line</h4>
                        <div class="form-row">
                            <div class="form-group col-sm-4">
                                <input type="text" class="form-control text-white rounded-0 bg-transparent" name="name" placeholder="Name"/>
                            </div>
                            <div class="form-group col-sm-4">
                                <input type="email" class="form-control text-white rounded-0 bg-transparent" name="Email" placeholder="Email"/>
                            </div>
                            <div class="form-group col-sm-4">
                                <input type="text" class="form-control text-white rounded-0 bg-transparent" name="subject" placeholder="Subject"/>
                            </div>
                            <div class="form-group col-12">
                                <textarea name="message" id="" cols="30" rows="4" class="form-control text-white rounded-0 bg-transparent" placeholder="Message"></textarea>

                            </div>
                            <div class="form-group col-12 mb-0">
                                <button type="submit" class="btn btn-primary rounded w-md mt-3">Send</button>
                            </div>                          
                        </div>                          
                    </form>
                </div>
            </div>
         
            <footer class="mt-5 py-4 border-top border-secondary">
                <p class="mb-0 small">&copy; <script>document.write(new Date().getFullYear())</script>, LeadMark Created By <a href="https://www.devcrud.com" target="_blank" rel="noopener noreferrer" >DevCrud.</a>  All rights reserved </p>     
            </footer>

        </div>
    </section>
	
            </div>
        )
    }
};

export default Home;