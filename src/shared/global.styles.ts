import { createGlobalStyle } from "styled-components";
import media from "styled-media-query";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --primary: #2c2738;
    --secondary: #756f86;
    --muted: #7c9cbf;
    --bright: #ffffff;
    --shade: #dbe2ea;
    --tint: #ebf4f8;
    --accent: #0880ae;
    --warning: #f2ac57;
    --success: #14a38b;
    --error: #ff7171; 

    font-size: 62.5%;

    ${media.lessThan("medium")`
      font-size: 60%;
    `};
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
