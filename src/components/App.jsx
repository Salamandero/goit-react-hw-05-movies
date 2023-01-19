import { Outlet, Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from './pages/Home/Home';
import Movies from './pages/Movies/Movies';
import MovieDetails from './pages/MovieDetails/MovieDetails';
import Cast from './pages/MovieDetails/Cast/Cast';
import NotFound from './pages/NotFound/NotFound';
import { Toaster } from 'react-hot-toast';
// import { StyledLink } from './Layout/Layout.styled';

export const App = () => {
  return (
    <div>
      {/* <nav>
        <StyledLink to="/" end>
          Home
        </StyledLink>
        <StyledLink to="/movies"> Movies </StyledLink>
      </nav> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Outlet />}>
            <Route index element={<Movies />} />
            <Route path=":movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              {/*  <Route
              path="reviews "
              element={<Reviews /> }
            />*/}
            </Route>
          </Route>

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <Toaster />
    </div>
  );
};
