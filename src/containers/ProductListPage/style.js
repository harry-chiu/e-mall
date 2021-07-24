import styled from 'styled-components';

export const Container = styled.div`
  padding: 24px 24px 72px 24px;
  height: 100%;

  & > * {
    margin-top: 16px;

    &:first-child {
      margin-top: 0;
    }
  }
`;

export const Title = styled.h1`
  margin: 0;
`;

export const ProductList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 16px;
`;
