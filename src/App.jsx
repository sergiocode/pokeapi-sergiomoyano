import { useState } from 'react'
import './App.css'
import {Link, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Informacion from './components/informacion'
import Pokedex from './components/Pokedex'
import BuscarPokemon from './components/BuscarPokemon'
import axios from 'axios';

const App = () => {

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/informacion' element={<Informacion/>} />
        <Route path='/pokedex' element={<Pokedex/>} />
        <Route path='/buscar' element={<BuscarPokemon/>} />
      </Routes>
    </div>
  )
}

export default App
