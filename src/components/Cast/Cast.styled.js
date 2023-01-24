import styled from 'styled-components';

export const ErrorCast = styled.div`
  display: flex;
  margin: 0 auto;
  font-size: 24px;
`;
export const WrapperCast = styled.div`
  border-top: 1px solid black;
  margin-top: 8px;
`;

export const ListCast = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 8px;
`;
export const CloseBtn = styled.button`
  display: inline-block;
  color: #fff;
  border-radius: 4px;
  margin: 8px 0;
  padding: 4px;
  background-color: #ad00b5;
`;
export const ImgCast = styled.img`
  display: block;
  width: 100%;
  height: 200px;
  object-fit: cover;
`;
