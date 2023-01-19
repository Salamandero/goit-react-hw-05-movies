import { Link } from 'react-router-dom';

const MovieList = ({ movies }) => {
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
    </>
  );
};

export default MovieList;
