import React, { useContext } from 'react';
import { StoreContext } from '../../context/movieContext';

const FaveChar = () => {
  const { faveChar } = useContext(StoreContext);

  return (
    <div className="fave_char_container">
      {faveChar.length && faveChar.map((char) => (
        <div>
          <h1>{char.name}</h1>
        </div>
      ))}
    </div>
  );
};

export default FaveChar;
