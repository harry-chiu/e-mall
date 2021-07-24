import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 16px;
  color: #ffffff;
  background: #232e3b;
  border-radius: 4px;
`;

export const Title = styled.span`
  flex: 1;
  display: inline-block;
  font-size: 14px;
  font-weight: 500;
`;

export const Extra = styled.div`
  & > a {
    text-decoration: none;
    color: #ffffff;
    font-size: 13px;
  }
`;
