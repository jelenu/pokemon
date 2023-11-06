import React, { useState, useEffect } from 'react';
import { PokemonView } from './PokemonView';
import './PokemonStyle.css'
export const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [offset, setOffset] = useState(1);
  const limit = 12;

  useEffect(() => {
    const fetchPokemonList = async () => {
      const newPokemonList = [];

      for (let i = offset; i < offset + limit; i++) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const data = await response.json();
        const filteredData = {
          
          id: data.id,
          name: data.name,
          sprite: data.sprites.other["official-artwork"].front_default,
          types: data.types,

      };

        newPokemonList.push(filteredData);
        
      }

      newPokemonList.forEach((pokemon, index) => {
        setTimeout(() => {
          setPokemonList((prevList) => [...prevList, pokemon]);
        }, index * 50);
      });
    };

    fetchPokemonList();
  }, [offset]);

  const loadMorePokemon = () => {
    setOffset(offset + limit);
  };

  return (
    <div>
      <div className="pokemon-list">

        {pokemonList.map((pokemon) => (
          <PokemonView key={pokemon.id} pokemon={pokemon}/>
        ))}
      </div>
      <button onClick={loadMorePokemon} className='view-more-button'>View More</button>
    </div>
  );
}
