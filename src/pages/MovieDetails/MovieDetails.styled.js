import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ImgFilm = styled.img`
  width: 250px;
  display: flex;
  margin: 0 auto;
`;

export const BackLink = styled(Link)`
  display: inline-block;
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
  padding: 4px;
  background-color: #ad00b5;
  margin-bottom: 8px;
`;
export const WrapperFilm = styled.div`
  display: grid;
  grid-template-columns: 260px 1fr;
  padding-bottom: 10px;
  border-bottom: 1px solid black;
`;
export const HeadText = styled.h3`
  margin-top: 16px;
`;
export const AddInfo = styled.h3`
  margin-top: 16px;
`;
export const AddInfoWrapper = styled.div`
  padding-bottom: 8px;
  border-bottom: 1px solid black;
`;
export const AddInfoLink = styled(Link)`
  color: #ad00b5;
  font-weight: 500;
`;
