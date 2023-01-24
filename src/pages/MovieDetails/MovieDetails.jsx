import { Outlet, useParams, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchDBMoviesInfo } from 'services/api';
import { Suspense } from 'react';
import Loader from 'components/Loader/Loader';
import noImg from '../../images/no_img.jpg';
import {
  ImgFilm,
  WrapperFilm,
  BackLink,
  HeadText,
  AddInfo,
  AddInfoWrapper,
  AddInfoLink,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDet, setMovieDet] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';
  const backLink = location.state?.from ?? '/';

  useEffect(() => {
    setIsLoading(true);
    fetchDBMoviesInfo(Number(movieId))
      .then(setMovieDet)
      .catch(error => {
        setError(
          'Our Minions have hands on other side and can`t find information about this film'
        );
        console.log(error);
      })
      .finally(setIsLoading(false));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieId]);
  if (!movieDet) {
    return null;
  }

  const average = Math.round(Number(movieDet?.vote_average) * 10);
  const date = movieDet.release_date?.slice(0, 4);
  const genresList = movieDet.genres?.map(genre => genre.name).join(', ');

  return (
    <>
      <BackLink to={backLinkHref}>Go back</BackLink>
      {isLoading && <Loader />}
      {error && <p>{error} </p>}

      {!error && movieDet && (
        <div>
          <WrapperFilm>
            <ImgFilm
              src={
                movieDet.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movieDet.poster_path}`
                  : noImg
              }
              alt={movieDet.title}
              loading="lazy"
            />
            <div>
              <h2>
                {movieDet.title} ({date})
              </h2>
              <p>User score: {average}%</p>
              <HeadText>Overview</HeadText>
              <p>{movieDet.overview}</p>
              <HeadText>Genres</HeadText>
              <p>{genresList}</p>
            </div>
          </WrapperFilm>
          <AddInfoWrapper>
            <AddInfo>Additional information</AddInfo>
            <ul>
              <li>
                <AddInfoLink to="cast" state={{ from: backLink }}>
                  Cast
                </AddInfoLink>
              </li>
              <li>
                <AddInfoLink to="reviews" state={{ from: backLink }}>
                  Reviews
                </AddInfoLink>
              </li>
            </ul>
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </AddInfoWrapper>
        </div>
      )}
      <Outlet />
    </>
  );
};

export default MovieDetails;
