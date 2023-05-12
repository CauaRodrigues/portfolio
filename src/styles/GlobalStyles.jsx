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
    scroll-behavior: smooth;
  }
  
  body,
  html {
    background-color: ${({ theme }) => theme.colors.main};
    color: ${({ theme }) => theme.colors.text};
  }

  main {
    width: 100%;
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
    background-image: ${({ theme }) =>
			theme.colors.name === "dark"
				? "-webkit-linear-gradient(45deg, rgba(90, 77, 143, 0.92) 22.31%, rgba(112, 182, 242, 0.82) 60.19%)"
				: "-webkit-linear-gradient(45deg, #6348adc6, rgba(103, 55, 235, 0.623) 30%)"};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    background-size: 150%;
    display: inline;
  }
`;

export default GlobalStyles;
