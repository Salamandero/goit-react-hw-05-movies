import { fetchDBMoviesTrend } from 'services/api';
import { useState, useEffect } from 'react';
import Loader from '../../components/Loader/Loader';
import { Title } from './Home.styled';
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
          <Title>Trending of the week</Title>
          <MovieList movies={movies} />
        </>
      )}
    </>
  );
};

export default Home;
