import { Outlet } from 'react-router-dom';
import { StyledLink } from './Layout.styled';

const Layout = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <StyledLink to="/" end>
              Home
            </StyledLink>
          </li>
          <li>
            <StyledLink to="/movies"> Movies </StyledLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </header>
  );
};

export default Layout;
