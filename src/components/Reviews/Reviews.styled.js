import styled from 'styled-components';

export const ErrorReviews = styled.div`
  display: flex;
  margin: 0 auto;
  font-size: 24px;
`;

export const CloseBtn = styled.button`
  display: inline-block;
  color: #fff;
  border-radius: 4px;
  margin: 8px 0;
  padding: 4px;
  background-color: #ad00b5;
`;
export const WrapperReviews = styled.div`
  border-top: 1px solid black;
  margin-top: 8px;
`;
export const Item = styled.li`
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;
