import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  color: yellowgreen;

  &.active {
    color: orange;
    scale: 1.2;
  }
`;
