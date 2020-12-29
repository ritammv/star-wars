import React from 'react';

import './FilmTile.scss';
// import {Route, Switch} from 'react-router-dom'

const FilmTile = ({ film }) => (
  <div className="film_tile">
    <h1>{film.title}</h1>
    <img
      className="movie_img"
      src={`/images/ep${film.episode_id}.jpg`}
      alt="movie_image"
    />
    <button type="button">More Info</button>

  </div>
);

export default FilmTile;
