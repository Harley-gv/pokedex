import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PokemonsList.css'

const PokemonsList = ({ pokemon }) => {
    const [url, setPokemonsUrl] = useState({})
    const navigate = useNavigate() 

    useEffect(() => {
        axios.get(pokemon.url).then(res => setPokemonsUrl(res.data))
    }, [pokemon])

    
    return (
        
            <div className="card" onClick={() => navigate(`/pokedex/${url.name}`)} > 
                <h2>{pokemon.name}</h2>
                <img src={url.sprites?.front_default} alt="" />
            </div>


  
    );
};

export default PokemonsList;