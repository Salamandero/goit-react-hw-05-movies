import { fetchDBMoviesTrend } from 'services/api';
import { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetchDBMoviesTrend().then(setMovies);
  }, []);
  console.log(movies[0]);
  return (
    <>
      <ul>
        {movies.map(({ id, title, name }) => (
          <li key={id}>
            <Link to={`/movies/${id}`}>
              {name} {title}
            </Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </>
  );
};

export default Home;
