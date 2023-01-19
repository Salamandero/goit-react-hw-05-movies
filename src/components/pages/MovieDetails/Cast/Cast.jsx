import { fetchDBMoviesInfoCast } from 'services/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const { movieId } = useParams();
  const [castInfo, setCastInfo] = useState();
  useEffect(() => {
    async function getMoviesInfo(movieId) {
      try {
        const movieInfoCast = await fetchDBMoviesInfoCast(movieId);
        console.log(castInfo);
        return setCastInfo(movieInfoCast);
      } catch (error) {
        console.log(error.message);
      }
    }
    if (!castInfo) {
      return null;
    }
    console.log(movieId);
    getMoviesInfo();
  }, []);
  fetchDBMoviesInfoCast();
  return (
    <>
      <ul>
        <li>map</li>
      </ul>
    </>
  );
};

export default Cast;
