import React, { Component } from 'react';
import fetch from './../../fetch/fetch';
class HomePage extends Component {
  state = {};

  async componentDidMount() {
    const response = await fetch.getPopularMovies();
    console.log(response);
  }

  render() {
    return <h1>This is home page</h1>;
  }
}

export default HomePage;
