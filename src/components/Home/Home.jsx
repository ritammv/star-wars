import React, { useContext } from 'react';
import { movieContext } from '../../context/provider';
import FilmTile from '../FilmTile/FilmTile';

const Home = () => {
  const films = useContext(movieContext);

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
