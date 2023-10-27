import React, { useState, useEffect } from 'react';
import { PokemonView } from './PokemonView';
export const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]); // Almacena la lista de Pokémon.
  const [offset, setOffset] = useState(1); // Controla el índice de inicio de la lista a mostrar.
  const limit = 12; // Define cuántos Pokémon cargar en cada solicitud.

  useEffect(() => {
    const fetchPokemonList = async () => {
      const newPokemonList = [];

      for (let i = offset; i < offset + limit; i++) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const data = await response.json();
        newPokemonList.push(data);
      }

      setPokemonList((prevList) => [...prevList, ...newPokemonList]);
    };

    fetchPokemonList();
  }, [offset]);

  const loadMorePokemon = () => {
    // Cuando el usuario hace clic en "Ver más", incrementa el valor de offset para cargar el siguiente conjunto de 12 Pokémon.
    setOffset(offset + limit);
  };

  return (
    <div>
      <ul>
        {pokemonList.map((pokemon) => (
          <li key={pokemon.id}>{pokemon.name}</li>
        ))}
      </ul>
      <button onClick={loadMorePokemon}>Ver más</button>
    </div>
  );
}
