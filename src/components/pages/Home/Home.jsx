import { fetchDBMoviesTrend } from 'services/api';
import { useState, useEffect } from 'react';

import MovieList from '../../MovieList/MovieList';

const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetchDBMoviesTrend().then(setMovies);
  }, []);
  return (
    <>
      <MovieList movies={movies} />
    </>
  );
};

export default Home;
