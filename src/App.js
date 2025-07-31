import React, { useState, useEffect } from 'react';
import PokemonList from './pokemonList.js';
import axios from 'axios';

function App() {
  const [pokemon, setPokemon] = useState([])
  const [currentPageUrl, setcurrentPageUrl] = useState(['https://pokeapi.co/api/v2/pokemon'])
  const [prevPageUrl, setPrevPageUrl] = useState()
  const [nextPageUrl, setNextPageUrl] = useState()
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    axios.get(currentPageUrl).then(res => { 
      setNextPageUrl(res.data.next)
      setPrevPageUrl(res.data.previous)
      setPokemon(res.data.results.map(p => p.name))
    })
  }, [])
  

  return (
    <PokemonList pokemon={pokemon} /> 

  );
}

export default App;
