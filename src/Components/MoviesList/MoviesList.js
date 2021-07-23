import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './MoviesList.scss';

const MoviesList = ({ movies, location }) => {
  return (
    movies.length > 0 && (
      <ul className="MoviesList">
        {movies.map(({ title, id }) => (
          <li className="movieItem" key={id}>
            <Link
              className="movieLink"
              to={{
                pathname: `/movies/${id}`,
                state: { from: location },
              }}
            >
              <p className="movieTitle">{title}</p>
            </Link>
          </li>
        ))}
      </ul>
    )
  );
};

export default withRouter(MoviesList);
