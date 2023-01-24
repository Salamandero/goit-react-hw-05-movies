import { fetchDBMoviesTrend } from 'services/api';
import { useState, useEffect } from 'react';
import Loader from '../../components/Loader/Loader';

import MovieList from '../../components/MovieList/MovieList';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    fetchDBMoviesTrend()
      .then(setMovies)
      .catch(error => console.log(error))
      .finally(() => setIsLoading(false));
  }, []);

  if (!movies) {
    return null;
  }
  return (
    <>
      {isLoading && <Loader />}
      {movies.length > 0 && (
        <>
          <h3>Trending of the week</h3>
          <MovieList movies={movies} />
        </>
      )}
    </>
  );
};

export default Home;
