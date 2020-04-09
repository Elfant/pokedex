import React, { useEffect, useState } from "react";

import "./scss/main.scss";

import img from "../images/pokeball.png";

import PokeCard from "../components/PokeCard/PokeCard.jsx";

const App = () => {
  const [pokemons, setPokemons ] = useState([]);

  const showNextPokemons = () => {
    const pokemonsArrayLength = pokemons.length - 1;

    fetch(`/pokemons?nexturl=${pokemons[pokemonsArrayLength].url}`)
    .then(response => response.json())
    .then(data => setPokemons((pokemons) =>[...pokemons, ...data.pokemons]))
  };

  useEffect(() => {
    fetch("/pokemons")
      .then(res => res.json())
      .then(data => {
        setPokemons(data.pokemons)
    })
  }, []);

  const scroolToTheTop = () => {
    window.scrollTo(0, 0)
  }

  const filterPokemons = (event) => {
    const pokemonType = event.target.value;
    // console.log(pokemons[0].firstNature)
    const filtredPokemons = [...pokemons].filter((element) => element.firstNature === pokemonType || element.secondNature === pokemonType);
    console.log("filtred", filtredPokemons)

    // console.log(temp)
    // console.log(pokemonType)
  }
  
  return (
    <div className="container">
      <div className="header">
        <h1 className="headerText">
          <img className="headerImg" src={img}/>PokeDex
        </h1>
        <div>
          <select id="" onChange={(event) => filterPokemons(event)}>
            <option value="" defaultValue>All</option>
            <option value="bug">Bug</option>
            <option value="dragon">Dragon</option>
            <option value="fairy">Fairy</option>
            <option value="ghost">Ghost</option>
          </select>
        </div>
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
        <button className="navBarBtn" onClick={() => showNextPokemons()}>
          Show me more Pokemons!
        </button>
        <button className="navBarScroolBtn" onClick={() => scroolToTheTop()}>
          >
        </button>
      </div>
    </div>
  );
};

export default App
