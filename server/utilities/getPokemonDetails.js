const fetch = require("node-fetch");

const getPokemonDetails = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  let optionalNature;
  try {
    optionalNature = data.types[1].type.name
  } catch {
      optionalNature = null
  }

  return {
    name: data.name,
    firstNature: data.types[0].type.name,
    secondNature: optionalNature
  }
}

module.exports = getPokemonDetails
