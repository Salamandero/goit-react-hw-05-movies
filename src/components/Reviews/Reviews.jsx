import { fetchDBMoviesInfoReviews } from 'services/api';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Loader from '../Loader/Loader';
import { ErrorReviews, CloseBtn, Item, WrapperReviews } from './Reviews.styled';

const Reviews = () => {
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
      {error && <ErrorReviews>{error} </ErrorReviews>}
      {reviews.length > 0 && (
        <WrapperReviews>
          <CloseBtn type="button" onClick={() => navigate(-1)}>
            Close
          </CloseBtn>
          <ul>
            {reviews.map(({ id, author, content }) => (
              <Item key={id}>
                <h4>Author: {author}</h4>
                <p>{content}</p>
              </Item>
            ))}
          </ul>
        </WrapperReviews>
      )}
    </>
  );
};

export default Reviews;
