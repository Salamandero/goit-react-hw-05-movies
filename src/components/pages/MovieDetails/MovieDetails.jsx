import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchDBMoviesInfo } from 'services/api';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState([]);
  useEffect(() => {
    async function getMoviesInfo() {
      try {
        // await fetchDBMoviesInfo(movieId).then(setMovieDetails);
        const movieInfo = await fetchDBMoviesInfo(movieId);
        console.log(movieInfo);
        return setMovieDetails(movieInfo);
      } catch (error) {
        console.log(error.message);
      }
    }
    if (!movieDetails) {
      return null;
    }
    getMoviesInfo();
  }, [movieId]);
  console.log(movieDetails);
  return (
    <>
      <div>MovieDetails page to ID - {movieId}</div>

      {/* <div>{movieInfo}</div> */}
    </>
  );
};

export default MovieDetails;
