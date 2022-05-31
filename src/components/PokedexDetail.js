import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PokedexDetail = () => {
    const [pokemon, setPokemon] = useState([])
     
    const { name } = useParams()
     
    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then(res => setPokemon(res.data))
    },[name])
      

    console.log(pokemon.weight)

    return (
        <div>
            <h1>este es el pokemon: {name}</h1>
        </div>
    );
};

export default PokedexDetail;