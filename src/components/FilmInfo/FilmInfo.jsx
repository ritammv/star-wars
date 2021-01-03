import React, { useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { movieContext } from '../../context/provider';
import './FilmInfo.scss';

const FilmInfo = () => {
  const films = useContext(movieContext);
  const history = useHistory();

  const { id } = useParams();

  const currentMovie = films.find((film) => film.episode_id === Number(id));

  const handleClick = (e) => {
    let stringURL = e.target.value;
    const numberPattern = /\d+/g;
    stringURL = stringURL.match(numberPattern).join([]);
    history.push(`/charInfo/${stringURL}/`);
  };

  return (
    <div className="film_info_container">
      <h1>{currentMovie.title}</h1>
      <h2>{currentMovie.opening_crawl}</h2>
      <img
        className="movie_img"
        src={`/images/ep${currentMovie.episode_id}.jpg`}
        alt="movie_image"
      />
      {currentMovie.characters && currentMovie.characters.map((character) => <button onClick={handleClick} value={character} type="button">{character}</button>)}
    </div>
  );
};

export default FilmInfo;
