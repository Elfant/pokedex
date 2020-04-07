import React, { useEffect, useState } from "react";

import "./scss/main.scss";

import img from "../images/pokeball.png";

import PokeCard from "../components/PokeCard/PokeCard.jsx";


const App = () => {
  const [pokemons, setPokemons ] = useState();

  const showNextPokemons = () => {
    const pokemonsArrayLength = pokemons.length - 1;   
    
    fetch(`/pokemons?nexturl=${pokemons[pokemonsArrayLength].url}`)
    .then(response => response.json())
    .then(data => setPokemons((pokemons) =>[...pokemons, ...data.pokemons]))
  }
  

  useEffect(() => {
    fetch("/pokemons")
      .then(res => res.json())
      .then(data => {
        setPokemons(data.pokemons)
      })
  }, [])

  return (
    <div className="container">
      <div className="header">
        <h1 className="headerText">
          <img className="headerImg" src={img}/>
          PokeDex</h1>
      </div>
        {
          pokemons ? pokemons.map((element, i) => (
            <PokeCard 
              name={element.name} 
              firstNature={element.firstNature} 
              secondNature={element.secondNature}
              key={element.id}
              imgSrc={`https://pokeres.bastionbot.org/images/pokemon/${element.id}.png`}
            />
          )): null
        }
    <div className="navBar">
      <button onClick={() => showNextPokemons()}>
        Pokaz kolejne pokemony
      </button>
    </div>
    </div>
  )
}

export default App
