import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  padding: 0 16px;
  width: 100%;
  height: 64px;
  max-height: 64px;
  color: #ffffff;
  background: #232e3b;
`;

export const LeftBlock = styled.div``;

export const MiddleBlock = styled.div`
  flex: 1;
`;

export const RightBlock = styled.div`
  height: 100%;
`;

export const Logo = styled.img`
  width: 100%;
  height: auto;
  max-width: 56px;
  cursor: pointer;
`;

export const SignIn = styled.button`
  display: inline-block;
  height: 100%;
  color: #ffffff;
  font-size: 14px;
  letter-spacing: 2px;
  border: none;
  background: transparent;
  cursor: pointer;
`;
