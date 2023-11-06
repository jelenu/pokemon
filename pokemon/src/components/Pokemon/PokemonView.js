import React from 'react'
import './PokemonStyle.css'
import { Link } from 'react-router-dom';


export const PokemonView = ({ pokemon }) => {
  const tipoColores = {
    normal: '#A8A77A',
    fire: '#EE8130',
    water: '#6390F0',
    electric: '#F7D02C',
    grass: '#7AC74C',
    ice: '#96D9D6',
    fighting: '#C22E28',
    poison: '#A33EA1',
    ground: '#E2BF65',
    flying: '#A98FF3',
    psychic: '#F95587',
    bug: '#A6B91A',
    rock: '#B6A136',
    ghost: '#735797',
    dragon: '#6F35FC',
    dark: '#705746',
    steel: '#B7B7CE',
    fairy: '#D685AD',
  };


  return (

    
    <Link to={`/${pokemon.name}`}>

      <div key={pokemon.id} className="pokemon-item">

        <img src={pokemon.sprite} alt={pokemon.name} className='pokemon-image'/>

        <div className='pokemon-body'>
          <span className="pokemon-id">N.º {pokemon.id}</span>

          <p className="pokemon-name">{pokemon.name}</p>

          <div className='pokemon-types'>
            {pokemon.types.map((type, index) => (
              <div key={index} className='pokemon-type' style={{ backgroundColor: tipoColores[type.type.name] }}> {type.type.name}</div>
            ))}
          </div>
        </div>
          
      </div>   
    </Link>  

    
  )
}
