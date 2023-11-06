import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';


export const PokemonDetail = () => {
  const { pokemonName } = useParams();
  const [pokemonInfo, setPokemonInfo] = useState(null); 

  useEffect(() => {
    const fetchPokemonDetail = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        const data = await response.json();
        setPokemonInfo(data); 
      } catch (error) {
        console.error('Error al obtener los datos del Pokémon', error);
      }
    };

    fetchPokemonDetail();
  }, [pokemonName]);
  

  return (
    <div>
    {pokemonInfo ? (
      <>
      <button class="before-button"></button>
      <button class="after-button"></button>


      </>
      
    ) : (
      <p>Cargando información del Pokémon...</p>
    )}
  </div>
  )
}
