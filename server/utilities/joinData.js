const fetch = require("node-fetch");

const getPokemons = require("./getPokemons");
const getPokemonDetails = require("./getPokemonDetails");


const joinData = async () => {
  const pokemons = await getPokemons();
 
  const promises = await pokemons.map(item => getPokemonDetails(item.url));

  return Promise.all(promises);
};

module.exports = joinData;
