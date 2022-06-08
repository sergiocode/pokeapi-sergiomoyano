import React,{Component} from "react";
import { Link } from 'react-router-dom'

const Navbar = () => {
    return(
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark color-white fixed-top">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <Link to='/' class="nav-link">Pokemon API</Link>
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to='/' class="nav-link active" aria-current="page">Home</Link>
              </li>
              <li class="nav-item">
                <Link to='/informacion' class="nav-link">Informacion</Link>
              </li>
              <li class="nav-item">
                <Link to='/pokedex' class="nav-link">Pokedex Lista</Link>
              </li>
              <li class="nav-item">
                <Link to='/buscar' class="nav-link">Buscar Pokemon</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>);
}

export default Navbar;