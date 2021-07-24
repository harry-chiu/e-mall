import styled from 'styled-components';

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 64px;
  max-height: 64px;
  z-index: 999;
`;

export const Aside = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 64px;
  width: 240px;
  height: 100%;
  max-height: 100%;
  background: #ffffff;
  overflow: auto;
`;

export const Main = styled.main`
  padding-top: 64px;
  padding-left: 240px;
  min-height: 100%;
`;
