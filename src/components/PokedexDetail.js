import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './PokedexDetail.css'
import headerlogo from '../img/header-logo.png'

const PokedexDetail = () => {
    const [pokemonInfo, setPokemonInfo] = useState([])

    const { name } = useParams()

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${name}/`).then(res => setPokemonInfo(res.data))
    }, [name])

    console.log(pokemonInfo)


    return (
        <div className='container'>
            <img src={headerlogo} alt="logo" className='header' />


            <div className="pokedemon-Details">
                <img src={pokemonInfo.sprites?.other?.dream_world.front_default} alt="" id='img' />

                <div className="details-container">
                    <h2 className='number-id'># {pokemonInfo.id}</h2>
                    <h2>{pokemonInfo.name}</h2>
                    <p>Peso: {pokemonInfo.weight}</p>
                    <p>Altura: {pokemonInfo.height}</p>
                    <p>Experiencia: {pokemonInfo.base_experience}</p>
                    <h2>Habilidades:</h2>
                    <div className="skills">
                        {
                            pokemonInfo.abilities?.map(skills => (
                                <p>{skills.ability?.name}</p>
                            ))}
                    </div>
                </div>

            </div>

        </div>
    );
};

export default PokedexDetail;