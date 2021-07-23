import React from 'react';
import './Cast.scss';

const Cast = ({ cast }) => {
  return (
    <ul className="castList">
      {cast.map(({ character, id, name, photo }) => (
        <li className="castItem" key={id}>
          <div>
            <div>{photo && <img alt={name} src={`https://image.tmdb.org/t/p/w200${photo}`} />}</div>
            <p className="castText">Name: {name}</p>
            <p className="castText">Character: {character}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Cast;
