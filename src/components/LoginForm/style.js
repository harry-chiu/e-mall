import styled from 'styled-components';

export const Container = styled.div`
  width: 375px;
  padding: 16px;
  background: #ffffff;
  border-radius: 2px;

  form {
    margin-top: 24px;

    & > button {
      margin-top: 32px;
    }
  }
`;

export const Title = styled.h2`
  margin: 0;
`;
