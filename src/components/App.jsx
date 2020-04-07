import React, { useEffect, useState } from "react";

import PokeCard from "../components/PokeCard/PokeCard.jsx";

const App = () => {
  const [pokemons, setPokemons ] = useState()

  useEffect(() => {
    fetch("/pokemons")
      .then(res => res.json())
      .then(data => {
        setPokemons(data.pokemons)
      })
  }, [])

  return (
    <div className="container">
      {
       pokemons ? pokemons.map((element, i) => (
        <PokeCard 
          name={element.name} 
          firstNature={element.firstNature} 
          key={i}
        />
       )): null
      }
    </div>
  )
}

export default App
