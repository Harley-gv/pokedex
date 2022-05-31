import React, { useEffect, useState } from 'react';
import headerlogo from '../img/header-logo.png'
import './Pokedex.css'
import { useSelector } from 'react-redux'
import axios from 'axios';
import PokemonsList from './PokemonsList';
import { useNavigate } from 'react-router-dom';

const Pokedex = () => {
    const trainer = useSelector(state => state.trainer)
    const [pokemons, setPokemons] = useState([])
    const [pokemonSearch, setPokemonSearch] = useState('')
    

    const navigate = useNavigate()


    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=1126").then(res => setPokemons(res.data.results))
    }, [])
   
    
   

    //console.log(pokemonsType.species?.name)
    const search = () => {
        navigate(`/pokedex/${pokemonSearch}`)
    }

    return (

        <div>
            <header className='header'>
                <img src={headerlogo} alt="header logo" />
            </header>

            <h1> <span>Bienvenido {trainer},</span> aquí podrás encontrar tu pokemón favorito</h1>

            <div className="navbar">

                <div className="navbar-search">
                    <input type="text" value={pokemonSearch} onChange={e => setPokemonSearch(e.target.value)} placeholder='buscar pokemon' />
                    <button className='btn' onClick={search}>Buscar</button>
                </div>

                <select className='navbar-select'>
                   
                   
                    <option value="">
                        pokemon1
                    </option>
                </select>
            </div>


            <div className="pokemons">
                {
                    pokemons.map(pokemon => (
                        <li key={pokemon.url}>
                            < PokemonsList pokemon={pokemon} />
                        </li>


                    ))
                }
            </div>

        </div>

    );
};

export default Pokedex;