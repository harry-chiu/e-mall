import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  & > * {
    margin-top: 16px;

    &:first-child {
      margin-top: 0;
    }
  }
`;

export const Image = styled.img`
  width: 100%;
  max-width: 100%;
  max-height: 100%;
`;
