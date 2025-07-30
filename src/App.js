import React, { useState } from 'react';
import PokemonList from './pokemonList.js';

function App() {
  const [pokemon, setPokemon] = useState(["bulbasaur", "charamondare"])
  return (
    <PokemonList pokemon={pokemon} /> 

  );
}

export default App;
