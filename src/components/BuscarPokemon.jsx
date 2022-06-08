import React, { Component, useEffect, useState } from "react";
import axios from 'axios';

const BuscarPokemon = () => {
    const [pokemon, setPokemon] = useState("pikachu");
    const [pokemonData, setPokemonData] = useState([]);
    const [pokemonType, setPokemonType] = useState("");

    const getPokemon = async () => {
        const toArray = [];
        try {
            //Guardo en url la URL para hacer la conexión mediante axios
            const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`

            const res = await axios.get(url);
            toArray.push(res.data);
            //Busca en la API el tipo buscando en la posición [0] del JSON
            setPokemonType(res.data.types[0].type.name);
            setPokemonData(toArray);
            console.log(res);
        } catch (e) {
            console.log(e)
        }
    }

    const handleChange = (e) => {
        setPokemon(e.target.value.toLowerCase())
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        getPokemon();
    }

    return (
        <div id="pokedex-root">
            <h3 className="titulo-buscarPokemon">Buscar Pokemon</h3>
            <p className="texto-buscarPokemon">Prueba a buscar un Pokemon por nombre o por ID 🤘🏽</p>
            <form onSubmit={handleSubmit}>
                <label>
                    <input type="text" onChange={handleChange} />
                </label>
            </form>
            {pokemonData.map((data) => {
                return (
                    <div className="container">
                        <div className="card">
                            <img src={data.sprites["front_default"]} />
                            <div className="card-body">
                                <div className="list-group list-group-flush">
                                    <li class="list-group-item lista-row">
                                        <div className="card-label">Tipo:</div>
                                        <div>{pokemonType}</div>
                                    </li>
                                    <li class="list-group-item lista-row">
                                        <div className="card-label">Altura:</div>
                                        <div>{" "}{Math.round(data.height * 3.9)}</div>
                                    </li>
                                    <li class="list-group-item lista-row">
                                        <div className="card-label">Peso:</div>
                                        <div>{" "}{Math.round(data.weight / 4.3)} lbs</div>
                                    </li>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default BuscarPokemon;