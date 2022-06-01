import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './PokedexDetail.css'

const PokedexDetail = () => {
    const [pokemonInfo, setPokemonInfo] = useState([])
     
    const { name } = useParams()
     
    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${name}/`).then(res => setPokemonInfo(res.data))
    },[name])
      
   console.log(pokemonInfo)
    

    return (
        <div>
            <h1>{pokemonInfo.name}</h1>
            <img src={pokemonInfo.sprites?.front_default} alt="" id='img'/>
            <h2>experiencia: {pokemonInfo.base_experience}</h2>
            {/* <h2>stat: {pokemonInfo.stats[0].stat?.name}</h2> */}
        </div>
    );
};

export default PokedexDetail;