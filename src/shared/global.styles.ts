import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, input, button, textarea {
    font-family: 'IBM Plex Sans', sans-serif;
  }

  h1, h2, h3, h4, h5, strong {
    font-weight: 600;
  }

  button, a {
    cursor: pointer;
  }
`;
