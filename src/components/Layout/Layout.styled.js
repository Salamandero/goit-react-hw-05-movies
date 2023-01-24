import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
  padding: 6px;

  &.active {
    background-color: #ad00b5;
    font-weight: 700;
  }
`;
export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
`;
export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #2d2f32;
  gap: 8px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;

  > nav {
    display: flex;
    padding-left: 16px;
    margin-top: 8px;
    margin-bottom: 8px;
  }
`;
export const List = styled.ul`
  display: flex;
  gap: 16px;
`;
