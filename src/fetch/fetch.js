import Axios from 'axios';

const API_KEY = 'd79e01485776ea112ef8bafbae1a44c5';
const PATH = 'https://developers.themoviedb.org/3/';

const getPopularMovies = () => Axios.get(`${PATH}trending/get-trending?api_key=${API_KEY}`);

const fetch = {
  getPopularMovies,
};

export default fetch;
