import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchDBMoviesSearch } from '../../services/api';
import MovieSearch from '../../components/MovieSearch/MovieSearch';
import { NoFoundInfo } from './Movies.styled';

import Loader from 'components/Loader/Loader';
import MovieList from '../../components/MovieList/MovieList';

const Movies = () => {
  const [searchParams] = useSearchParams();
  // setSearchParams;
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

  // const onSubmit = value => {
  //   setSearchParams({ query: `${value}` });
  // };
  const proofMoviesList = () => {
    if (movies.length === 0 && query) {
      return true;
    }
    return false;
  };
  return (
    <>
      <MovieSearch
        query={query}
        // onSearch={onSubmit}
      />
      {isLoading && <Loader />}

      {proofMoviesList() && <NoFoundInfo>Not found movie</NoFoundInfo>}

      {movies && <MovieList movies={movies} />}
    </>
  );
};

export default Movies;
