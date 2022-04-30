import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100;300;400;500;700;900&display=swap');
  body {
    font-family: 'Noto Sans TC', sans-serif;
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6,
  div {
    font-family: 'Noto Sans TC', sans-serif;
    font-size: calc(0 + 2vmin);
  }
`;
