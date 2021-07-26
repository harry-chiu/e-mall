import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    width: 100%;
    height: 100%;
    background: #ecedf0;
  }

  .react-loading-skeleton {
    margin-bottom: 8px;
  }
`;

export default GlobalStyle;
