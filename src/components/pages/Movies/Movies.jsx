import { Outlet } from 'react-router-dom';
const Movies = () => {
  return (
    <>
      <div>Movies page</div>
      <input type="text" placeholder="search movies" />

      <Outlet />
    </>
  );
};

export default Movies;
