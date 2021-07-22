import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import HomePage from './Views/HomePage';
import MoviesPage from './Views/MoviesPage';
import './App.scss';

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink className="navLink" activeClassName="navLinkActive" exact to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="navLink" activeClassName="navLinkActive" to="/movies">
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
      <Route path="/" exact component={HomePage} />
      <Route path="/movies" component={MoviesPage} />
    </>
  );
}

export default App;
