import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './PokedexDetail.css'

const PokedexDetail = () => {
    const [pokemon, setPokemon] = useState([])
     
    const { name } = useParams()
     
    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then(res => setPokemon(res.data))
    },[name])
      
   console.log(pokemon)
    

    return (
        <div    >
            <h1>{pokemon.name}</h1>
            <img src={pokemon.sprites?.front_shiny_female} alt="" id='img'/>
            <p>peso: {pokemon.weight}</p>
            <p>experiencia: {pokemon.base_experience}</p>
            <p>habilidad Principal: {pokemon.abilities[0].ability?.name}</p>
            
        </div>
    );
};

export default PokedexDetail;