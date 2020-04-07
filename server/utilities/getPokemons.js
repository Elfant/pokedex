const fetch = require("node-fetch");

const urlApi = "https://pokeapi.co/api/v2/pokemon?limit=10";

const getPokemons = async () => {
  const response = await fetch(urlApi);
  const data = await response.json();
  return data.results;
};

module.exports = getPokemons;
