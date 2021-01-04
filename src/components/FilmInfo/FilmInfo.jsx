import React, { useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { MovieContext, StoreContext } from '../../context/movieContext';

import './FilmInfo.scss';

const FilmInfo = () => {
  const films = useContext(MovieContext);
  const history = useHistory();

  const { addMovie } = useContext(StoreContext);

  const { id } = useParams();

  const currentMovie = films.find((film) => film.episode_id === Number(id));

  const handleClick = (e) => {
    let stringURL = e.target.value;
    const numberPattern = /\d+/g;
    stringURL = stringURL.match(numberPattern).join([]);
    history.push(`/charInfo/${stringURL}/`);
  };

  return (
    <>
      <div className="film_info">
        <h1>{currentMovie.title}</h1>
        <button className="btn_default" type="button" onClick={() => addMovie(currentMovie)}>❤️Add to Favorites</button>
        <img
          className="movie_img_info"
          src={`/images/ep${currentMovie.episode_id}.jpg`}
          alt="movie_image"
        />
        <h3>Opening Crawl</h3>
        <p>{currentMovie.opening_crawl}</p>
        <h3>Character List</h3>
        {currentMovie.characters && currentMovie.characters.map((character, i) => <button className="character_btn" onClick={handleClick} value={character} type="button">{i + 1}</button>)}
      </div>
    </>
  );
};

export default FilmInfo;
