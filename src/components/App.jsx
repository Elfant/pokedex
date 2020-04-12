import React, { useEffect, useState } from "react";

import "./scss/main.scss";

import img from "../images/pokeball.png";

import PokeCard from "../components/PokeCard/PokeCard.jsx";
import SelectOptionItem from "../components/SelectOption/SelectOptionItem.jsx";

import pokemonTypes from "../data/pokemonTypes";

const App = () => {
  const [pokemons, setPokemons ] = useState([]);
  const [filteredPokemons, setFiltred] = useState([])

  useEffect(() => {
    fetch("/pokemons")
      .then(res => res.json())
      .then(data => {
        setPokemons(data);
    });
  }, []);

  useEffect(() => {
    setFiltred([])
  },[pokemons.length]);

  const renderListOfPokemons = (elements) => (
    elements.map((element) => (
      <PokeCard 
        name={element.name} 
        firstNature={element.firstNature} 
        secondNature={element.secondNature}
        key={element.id}
        imgSrc={`https://pokeres.bastionbot.org/images/pokemon/${element.id}.png`}
      />
    ))
  );

  const showNextPokemons = () => {
    const pokemonsArrayLength = pokemons.length - 1;

    fetch(`/pokemons?nexturl=${pokemons[pokemonsArrayLength].url}`)
    .then(response => response.json())
    .then(data => setPokemons((pokemons) =>[...pokemons, ...data]));
  };

  const filterPokemons = (event) => {
    if (event.target.value === "all") {
      return setFiltred([]);
    };

    const pokemonType = event.target.value;
    const filtered = [...pokemons].filter((element) => element.firstNature === pokemonType || element.secondNature === pokemonType );

    setFiltred(filtered);

    event.target.value = "pokemons"
  };
  
  const scrollToTheTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="container">
      <div className="header">
        <h1 className="headerText">
          <img className="headerImg" src={img}/>PokeDex
        </h1>
        <div>
          <select className="selectOption" onChange={(event) => filterPokemons(event)}>
            {
              pokemonTypes.map((element, i) => 
                <SelectOptionItem name = {element} key ={i}/>
              )
            }
          </select>
        </div>
      </div>
        {
          filteredPokemons.length === 0 ? renderListOfPokemons(pokemons)
          : renderListOfPokemons(filteredPokemons)
        }
      <div className="navBar">
        <button className="navBarBtn" onClick={() => showNextPokemons()}>
          Show me more Pokemons!
        </button>
        <button className="navBarScroolBtn" onClick={() => scrollToTheTop()}>
          >
        </button>
      </div>
    </div>
  );
};

export default App
