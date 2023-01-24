import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchDBMoviesSearch } from '../../services/api';
import MovieSearch from '../../components/MovieSearch/MovieSearch';

import Loader from 'components/Loader/Loader';
import MovieList from '../../components/MovieList/MovieList';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const query = searchParams.get('query') ?? '';
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!query) {
      return;
    }
    async function getSearchMovies() {
      try {
        setIsLoading(true);
        const movies = await fetchDBMoviesSearch(query);
        const arrMovies = movies.map(({ id, name, title }) => ({
          id,
          name,
          title,
        }));
        setMovies(arrMovies);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    getSearchMovies();
  }, [query]);

  const onSubmit = value => {
    setSearchParams({ query: `${value}` });
  };
  const proofMoviesList = () => {
    if (movies.length === 0 || movies.length === '') {
      return true;
    }
    return false;
  };
  return (
    <>
      <MovieSearch query={query} onSearch={onSubmit} />
      {isLoading && <Loader />}

      {proofMoviesList() && <p>Not found movie</p>}

      {movies && <MovieList movies={movies} />}
    </>
  );
};

export default Movies;
