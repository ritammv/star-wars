const BASE_URL = 'https://swapi.dev/api';

async function getFilms() {
  try {
    const response = await fetch(`${BASE_URL}/films/`);
    const films = await response.json();
    return films;
  } catch (e) {
    return console.error(e);
  }
}

async function getCharacter(id) {
  try {
    const response = await fetch(`${BASE_URL}/people/${id}`);
    const character = await response.json();
    return character;
  } catch (e) {
    return console.error(e);
  }
}

export default { getFilms, getCharacter };
