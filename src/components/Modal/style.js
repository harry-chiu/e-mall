import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

const fadeOut = keyframes`
  0% { opacity: 1; }
  100% { opacity: 0; }
`;

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  z-index: 1000;

  animation-name: ${props => (props.visible ? fadeIn : fadeOut)};
  animation-duration: ${props => props.transitionTime / 1000 || 0.25}s;
  animation-timing-function: ease;
  animation-fill-mode: forwards;
`;

export const Mask = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #60606060;
  z-index: 98;
`;

export const Content = styled.div`
  position: relative;
  z-index: 99;
`;
