import React from 'react';
import { NavLink, Link } from "react-router-dom";

class Header extends React.Component {
    render() {
        return (
     <main>
            
            <nav class="navbar custom-navbar navbar-expand-md navbar-light fixed-top" data-spy="affix" data-offset-top="10">
            <div class="container">
                <a class="navbar-brand" >
                    <img src="./assets/imgs/logo2.png" alt="" />
                </a>
                <button class="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <NavLink></NavLink>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="Tienda.html">Tienda</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="Blog.html">Blogs</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#contact">Contacto</a>
                        </li>

                        <div class="nav-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#948922" class="bi bi-cart-fill"
                                viewBox="0 0 16 16">
                                <path
                                    d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                            </svg>
                            <div class="counter">2</div>
                        </div>
                    </ul>
                </div>
            </div>
        </nav>


            <header class="header">

                <div class="overlay">
                    <h1 class="subtitle">Un proyecto</h1>
                    <h1 class="title">Innovador</h1>
                </div>
                <div class="shape">
                    <svg viewBox="0 0 1500 200">
                        <path d="m 0,240 h 1500.4828 v -71.92164 c 0,0 -286.2763,-81.79324 -743.19024,-81.79324 C 300.37862,86.28512 0,168.07836 0,168.07836 Z" />
                    </svg>
                </div>
                <div class="mouse-icon" ><div class="wheel" href="#about"></div></div>
            </header>
          </main>
        );
    };
};

export default Header;