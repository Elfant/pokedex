import React, { useEffect, useState } from "react";

import PokeCard from "../components/PokeCard/PokeCard.jsx";

const urlApi = "https://pokeapi.co/api/v2/pokemon?limit=20";

const fetchPokemons = async () => {
  const response = await fetch(urlApi)
  const data = await response.json();
  console.log(data.results)
  return data.results
}

const App = () => {
  const [pokemons, setPokemons ] = useState()

  useEffect(() => {
    fetchPokemons()
      .then(pokemons => setPokemons(pokemons))
  }, [])

  return (
    <div className="container">
      {
        pokemons ? pokemons.map(element => (
          <PokeCard name={element.name}/>
        )): null
      }
    </div>
  )
}

export default App
