import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './PokedexDetail.css'

const PokedexDetail = () => {
    const [pokemonInfo, setPokemonInfo] = useState([])

    const { name } = useParams()

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${name}/`).then(res => setPokemonInfo(res.data))
    }, [name])

    console.log(pokemonInfo)


    return (
        <div>
            <h1>{pokemonInfo.name}</h1>
            <img src={pokemonInfo.sprites?.other?.dream_world.front_default} alt="" id='img' />
            <h1># {pokemonInfo.id}</h1>

            <div className="details-container">
                <h2>Peso: {pokemonInfo.weight}</h2>
                <h2>Altura: {pokemonInfo.height}</h2>
                <h2>Experiencia: {pokemonInfo.base_experience}</h2>
                <h2 className='skills'>Habilidades: {
                    pokemonInfo.abilities.map(skills => (
                        <h3>{skills.ability.name}</h3>
                    ))}</h2>
            </div>

        </div>
    );
};

export default PokedexDetail;