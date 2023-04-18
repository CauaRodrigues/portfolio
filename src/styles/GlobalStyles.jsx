import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before,
  html,
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: 0;
    font-family: ${({ theme }) => theme.fonts.fm.quicksand};
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    text-decoration: none;
  }
  
  body,
  html {
    background-color: ${({ theme }) => theme.colors.main};
    color: ${({ theme }) => theme.colors.light};
  }
  
  ul,
  li {
    list-style: none;
  }
  
  img {
    display: block;
    max-width: 100%;
  }

  .gradient_text {
    background-image: -webkit-linear-gradient(90.88deg, rgba(90, 77, 143, 0.92) 25.42%, rgba(112, 182, 242, 0.82) 77.83%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

export default GlobalStyles;
