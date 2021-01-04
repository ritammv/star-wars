const BASE_URL = 'https://swapi.dev/api';

async function getFilms() {
  const response = await fetch(`${BASE_URL}/films/`);
  const films = await response.json();
  return films;
}

async function getCharacter(id) {
  const response = await fetch(`${BASE_URL}/people/${id}`);
  const character = await response.json();
  return character;
}

export default { getFilms, getCharacter };

// TODO ERROR HANDLING HERE
