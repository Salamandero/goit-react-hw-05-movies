import { fetchDBMoviesInfoReviews } from 'services/api';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Loader from '../Loader/Loader';

const Cast = () => {
  const { movieId } = useParams();

  const [isLoading, setIsLoading] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    setIsLoading(true);
    fetchDBMoviesInfoReviews(movieId)
      .then(setReviews)
      .catch(error => {
        setError(
          'Our Minions have hands on other side and can`t find information about this film'
        );
        console.log(error);
      })
      .finally(setIsLoading(false));
  }, [movieId]);
  if (!reviews) {
    return null;
  }

  if (reviews.length === 0 || reviews.length === '') {
    return <p>We don`t have any reviews for this movie</p>;
  }

  return (
    <>
      {isLoading && <Loader />}
      {error && <p>{error} </p>}
      {reviews.length > 0 && (
        <>
          <button type="button" onClick={() => navigate(-1)}>
            Close
          </button>
          <ul>
            {reviews.map(({ id, author, content }) => (
              <li key={id}>
                <h4>Author: {author}</h4>
                <p>{content}</p>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};

export default Cast;
