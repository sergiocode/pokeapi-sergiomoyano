import React, { Component } from "react";
import { Link } from 'react-router-dom'


const Informacion = () => {
    return (
        <div id="informacion-root">
            <h1>Informacion</h1>
            <div class="card card-informacion">
                <div class="card-header">
                SPA React JS
                </div>
                <div class="card-body">
                    <p class="card-text">Esta página está creada con React JS. Es una single page application, conocida como SPA. Hago uso de la libreria React Routing para crear las rutas de la SPA. Se puede apreciar a la hora de navegar por la web, ya que ésta no se actualiza cada vez que cambiamos de vista.</p>
                    <p class="card-text">También hago uso de Axios para hacer la conexión a la API. En la sección de Buscar Pokemon accederás a una vista donde puedes consultar Pokemons de la poke api, de manera que verás su nombre, número en la pokedex, tipo, peso y altura.</p>
                    <a href="#" class="btn btn-primary"><Link to='/pokedex' class="nav-link">Enjoy!🤪</Link></a>
                </div>
            </div>
        </div>
    );
}

export default Informacion;