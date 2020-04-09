import 'regenerator-runtime/runtime';

const getPokemons = require("./getPokemons");

const url = "https://pokeapi.co/api/v2/pokemon?limit=1"

test("It should connect to api and return data", async () =>{
  const pokemons = await getPokemons(url);
  expect(pokemons).toMatchSnapshot();
})