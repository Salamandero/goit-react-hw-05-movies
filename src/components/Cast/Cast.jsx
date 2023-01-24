import { fetchDBMoviesInfoCast } from 'services/api';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Loader from '../Loader/Loader';
import noCastImg from '../../images/no_man.jpg';
import {
  ErrorCast,
  CloseBtn,
  ListCast,
  ImgCast,
  WrapperCast,
} from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();

  const [isLoading, setIsLoading] = useState(false);
  const [credits, setCredits] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    setIsLoading(true);
    fetchDBMoviesInfoCast(movieId)
      .then(setCredits)
      .catch(error => {
        setError(
          'Our Minions have hands on other side and can`t find information about this film'
        );
        console.log(error);
      })
      .finally(setIsLoading(false));
  }, [movieId]);
  if (!credits) {
    return null;
  }

  if (credits.length === 0 || credits.length === '') {
    return <p>We don`t have any casts for this movie</p>;
  }

  return (
    <>
      {isLoading && <Loader />}
      {error && <ErrorCast>{error} </ErrorCast>}
      {credits.length > 0 && (
        <WrapperCast>
          <CloseBtn type="button" onClick={() => navigate(-1)}>
            Close
          </CloseBtn>

          <ListCast>
            {credits.map(({ id, name, character, profile_path }) => (
              <li key={id}>
                <ImgCast
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w300${profile_path}`
                      : noCastImg
                  }
                  alt={name}
                  loading="lazy"
                />
                <p>{name}</p>
                {character && <p>Character: {character}</p>}
              </li>
            ))}
          </ListCast>
        </WrapperCast>
      )}
    </>
  );
};

export default Cast;
