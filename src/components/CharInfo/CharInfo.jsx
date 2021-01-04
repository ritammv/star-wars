import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import ApiClient from '../../services/ApiClient';
import './CharInfo.scss';
import { StoreContext } from '../../context/movieContext';

const CharInfo = () => {
  const [character, setCharacter] = useState({});
  const { id } = useParams();

  const { addCharacter } = useContext(StoreContext);

  useEffect(() => {
    ApiClient.getCharacter(id)
      .then((data) => setCharacter(data));
  }, []);

  return (
    <div className="character_info_container">
      <h1>{character.name}</h1>
      <button type="button" onClick={() => addCharacter(character)}>Add Character To Favourites</button>
      <img
        className="movie_img"
        src={`/characters/${id}.jpg`}
        alt="movie_image"
      />

      <div className="character_info_subcontainer">
        <h3>Character Info</h3>
        <div className="character_info">
          <h5>Eye-Color</h5>
          <p>{character.eye_color}</p>
        </div>
        <div className="character_info">
          <h5>Gender</h5>
          <p>{character.gender}</p>
        </div>
        <div className="character_info">
          <h5>Birth Year</h5>
          <p>{character.birth_year}</p>
        </div>
      </div>
    </div>

  );
};

export default CharInfo;
