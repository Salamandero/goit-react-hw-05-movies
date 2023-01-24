import { Outlet, useNavigate, useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchDBMoviesInfo } from 'services/api';
import Loader from 'components/Loader/Loader';
import noImg from '../../images/no_img.jpg';
// import Cast from '../../components/Cast/Cast';
// import toast from 'react-hot-toast';

const MovieDetails = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const [movieDet, setMovieDet] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
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
      <button type="button" onClick={() => navigate(-1)}>
        Go back
      </button>
      {isLoading && <Loader />}
      {error && <p>{error} </p>}

      {!error && movieDet && (
        <div>
          <div>
            <img
              src={
                movieDet.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movieDet.poster_path}`
                  : noImg
              }
              alt={movieDet.title}
              width={250}
              loading="lazy"
            />
            <h3>
              {movieDet.title} ({date})
            </h3>

            <p>User score: {average}%</p>
            <h4>Overview</h4>
            <p>{movieDet.overview}</p>
            <h4>Genres</h4>
            <p>{genresList}</p>
          </div>
          <div>
            <p>Additional information</p>
            <ul>
              <li>
                <Link to={`cast`}>Cast</Link>
              </li>
              <li>
                <Link to={`reviews`}>Reviews</Link>
              </li>
            </ul>
            <Outlet />
          </div>
        </div>
      )}
      <Outlet />
    </>
  );
};

export default MovieDetails;
