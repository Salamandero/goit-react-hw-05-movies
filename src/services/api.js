import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = 'a147bcd1e0cbe82e9bf9de24930f8c06';

//Trends
export async function fetchDBMoviesTrend() {
  const res = await axios.get(`/trending/all/week`, {
    params: {
      api_key: API_KEY,
    },
  });
  return res.data.results;
}

//SearchQuery
export async function fetchDBMoviesSearch(query) {
  const res = await axios.get(`/search/movie`, {
    params: {
      api_key: API_KEY,
      query: query,
      page: 1,
    },
  });
  return res.data.results;
}

//запит повної інформації про фільм для сторінки кінофільму.
export async function fetchDBMoviesInfo(movieId) {
  const res = await axios.get(`/movie/${movieId}`, {
    params: {
      api_key: API_KEY,
    },
  });

  return res.data;
}
//запит інформації про акторський склад для сторінки кінофільму.
export async function fetchDBMoviesInfoCast(movie_id) {
  const res = await axios.get(`/movie/${movie_id}/credits`, {
    params: {
      api_key: API_KEY,
    },
  });

  return res.data.cast;
}
// запит оглядів для сторінки кінофільму.
export async function fetchDBMoviesInfoReviews(movie_id) {
  const res = await axios.get(`/movie/${movie_id}/reviews`, {
    params: {
      api_key: API_KEY,
      page: 1,
    },
  });
  return res.data.results;
}
