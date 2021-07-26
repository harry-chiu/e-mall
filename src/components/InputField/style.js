import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 8px;
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  height: 32px;
  padding: 6px 12px;
  border: 1px solid ${props => (props?.showError ? '#ff424f' : '#d0d0d0')};
  border-radius: 2px;
  font-size: 13px;

  &:focus {
    outline: none;
    border-color: #303030;
  }

  &::placeholder {
    color: #d0d0d0;
  }
`;

export const ErrorText = styled.span`
  display: block;
  margin-top: 6px;
  height: 12px;
  color: #ff424f;
  font-size: 12px;
  line-height: 1;
`;
