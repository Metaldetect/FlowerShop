import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  :root {
    --accent: #AD525B;
    --background: #FEF9F9;
    --black: #111111;
    --pink: #BE767D;
    --blueLink: #54ADFF;
  
  
    --red: #F43F5E;
    --green: #305346;
    --gray: #A18671;
    --white: #FFFFFF;
    --boxShadowDefault: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
    --boxShadowHover: 7px 13px 14px 0px rgba(116, 177, 232, 0.24);
    --transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
   font-family: 'Montserrat', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: var(--background);
    color: var(--black);
  }

  a {
    text-decoration: none;

  }

  ul, ol {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

   input, button, textarea, select {
    font: inherit;
  }
`;
