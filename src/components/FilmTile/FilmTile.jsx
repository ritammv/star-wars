import React from 'react';
import { useHistory } from 'react-router-dom';

import './FilmTile.scss';

const FilmTile = ({ film }) => {
  const history = useHistory();

  const handleClick = () => {
    history.push(`/filmInfo/${film.episode_id}`);
  };

  return (
    <div className="film_tile">
      <h1>{film.title}</h1>
      <img
        className="movie_img"
        src={`/images/ep${film.episode_id}.jpg`}
        alt="movie_image"
      />
      <button type="button" className="btn_default" onClick={handleClick}>More Info</button>

    </div>

  );
};

export default FilmTile;
