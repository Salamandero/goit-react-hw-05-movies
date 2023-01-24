import { Link, useLocation } from 'react-router-dom';
import { List, Item } from './MovieList.styled';
import PropTypes from 'prop-types';

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <>
      <List>
        {movies.map(({ id, title, name }) => (
          <Item key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              {title ?? name}
            </Link>
          </Item>
        ))}
      </List>
    </>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      name: PropTypes.string,
    })
  ),
};
export default MovieList;
