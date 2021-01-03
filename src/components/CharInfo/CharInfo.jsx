import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ApiClient from '../../services/ApiClient';

const CharInfo = () => {
  const [character, setCharacter] = useState({});
  const { id } = useParams();

  useEffect(() => {
    ApiClient.getCharacter(id)
      .then((data) => setCharacter(data));
  }, []);

  return (
    <div className="character_info">
      <h1>{character.name}</h1>
      <img
        className="movie_img"
        src={`/characters/${id}.jpg`}
        alt="movie_image"
      />
      <p>{character.eye_color}</p>
    </div>

  );
};

export default CharInfo;

// Name
// Description
// Picture
