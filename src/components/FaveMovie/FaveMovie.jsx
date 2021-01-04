import React, { useContext } from 'react';
import { StoreContext } from '../../context/movieContext';

const FaveMovie = () => {
  const { faveMovie } = useContext(StoreContext);

  return (
    <div className="fave_movie_container">
      {faveMovie.length && faveMovie.map((movie) => (
        <div>
          <img
            className="fave_movie_img"
            src={`/images/ep${movie.episode_id}.jpg`}
            alt="movie_image"
          />
          <h1>{movie.title}</h1>
        </div>
      ))}
    </div>

  );
};

export default FaveMovie;
