const fetch = require("node-fetch");

const getPokemons = require("./getPokemons");
const getPokemonDetails = require("./getPokemonDetails");

let urlApi = `https://pokeapi.co/api/v2/pokemon?limit=50`;

const joinData = async (nextUrl) => {
  nextUrl ? urlApi = nextUrl : null
  
  const pokemons = await getPokemons(urlApi);
  
  const promises = await pokemons.results.map(item => getPokemonDetails(item.url, pokemons.next));
  
  return Promise.all(promises);
};

module.exports = joinData;
