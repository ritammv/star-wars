import React, { useState, useEffect } from 'react';
import FilmTile from '../FilmTile/FilmTile';

const Home = () => {
  const [films, setFilms] = useState([]);
  // eslint-disable-next-line no-unused-vars
  // const [loading, setLoading] = useState(true);

  async function fetchFilms() {
    try {
      const res = await fetch('https://swapi.dev/api/films/');
      const data = await res.json();
      setFilms(data.results);
      // setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchFilms();
  }, []);

  return (

    <div className="movie_tile_list">
      {films && films.sort((a, b) => a.episode_id - b.episode_id).map((film) => (
        <FilmTile
          key={film.episode_id}
          film={film}
        />
      ))}
    </div>
  );
};

export default Home;
