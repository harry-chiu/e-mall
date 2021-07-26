import styled from 'styled-components';

export const Container = styled.div`
  color: #606060;
  border: 1px solid #d0d0d0;
  border-radius: 2px;

  & > * {
    padding: 0;
  }

  & > input {
    width: 64px;
    height: 32px;
    text-align: center;
    font-size: 13px;
    border: none;
    border-left: 1px solid #d0d0d0;
    border-right: 1px solid #d0d0d0;

    &:focus {
      outline: none;
    }
  }

  & > button {
    display: inline-block;
    width: 32px;
    height: 32px;
    border: none;
    background: #ffffff;
    cursor: pointer;
  }
`;

export const Decrease = styled.button``;

export const Input = styled.input``;

export const Increase = styled.button``;
