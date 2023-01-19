import { Outlet, useNavigate, useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchDBMoviesInfo } from 'services/api';
// import toast from 'react-hot-toast';

const MovieDetails = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const [movieDet, setMovieDet] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    if (!movieDet) {
      return null;
    }
    async function getMoviesInfo() {
      try {
        const movieInfo = await fetchDBMoviesInfo(movieId);
        return setMovieDet(movieInfo);
      } catch (error) {
        setError(
          'Our Minions have hands on other side and can`t find information about this film'
        );
      }
    }

    getMoviesInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieId]);
  const average = Math.round(Number(movieDet.vote_average) * 10);

  // const date = movieDet.release_date.slice(0, 4);
  const date = movieDet.release_date;
  // const genresList = movieDet.genres.map(genre => genre.name).join(', ');
  const genresList = 'GENRES try another way, or lazy make!';
  return (
    <>
      <button type="button" onClick={() => navigate(-1)}>
        Go back
      </button>
      {error ? (
        <p>{error} </p>
      ) : (
        <div>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w500${movieDet.backdrop_path}`}
              alt={movieDet.title}
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
                <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
              </li>
            </ul>
          </div>
        </div>
      )}
      <Outlet />
    </>
  );
};

export default MovieDetails;
