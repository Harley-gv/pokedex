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
    const [pokemonType, setPokemonType] = useState([])
    const [page, setPage] = useState(1)

    const pokemonNumbers = 20

    const lastIndex = pokemonNumbers * page
    const firstIndex = lastIndex - pokemonNumbers
    const pokemonPaginated = pokemons.slice(firstIndex, lastIndex)

    const lastPage = Math.ceil(pokemons.length / pokemonNumbers)

    const numberPage = []

    for (let i = 1; i <= lastPage; i++) {
        numberPage.push(i)
    }


    const navigate = useNavigate()


    useEffect(() => {
        //para mostrar todos los pokemos desabilitar comentario de la linea 36
        //axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=1126").then(res => setPokemons(res.data.results))
        axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=300").then(res => setPokemons(res.data.results))
        axios.get(" https://pokeapi.co/api/v2/type/").then(res => setPokemonType(res.data.results))
    }, [])



    //console.log(pokemonType)

    const filterPokemon = e => {

        axios.get(e.target.value).then(res => (setPokemons(res.data.pokemon)))
    }


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

                <select className='navbar-select' onChange={filterPokemon}>
                    {
                        pokemonType.map(type => (
                            <option value={type.url} key={type.url}>
                                {type.name}
                            </option>


                        ))
                    }



                </select>
            </div>

            <div className="pages">
                    <button onClick={() => setPage(page - 1)} disabled={page === 1}>prev</button>

                    {
                        numberPage.map(number => (
                            <button onClick={() => setPage(number)}>{number}</button>
                        ))
                    }

                    <button onClick={() => setPage(page + 1)} disabled={page === lastPage}>next</button>
                </div>


            <div className="pokemons" >

                {
                    pokemonPaginated?.map(pokemon => (

                        < PokemonsList pokemonUrl={pokemon.url !== undefined ? pokemon.url : pokemon.pokemon.url} key={pokemon.url} />



                    ))
                }
            </div>

            

        </div>

    );
};

export default Pokedex;