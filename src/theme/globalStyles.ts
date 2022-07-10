
import { createGlobalStyle } from "styled-components";
import reset from "./reset";

const GlobalStyles = createGlobalStyle`
${reset};
::-moz-selection { /* Code for Firefox */
  color: #fff;
  background: #ff4d4d;
}
::selection {
    color: #fff;
  background: #ff4d4d;
}
html, body {
    padding: 0;
    margin: 0;
    font-family: 'Playfair Display', sans-serif;
    scroll-behavior: smooth;
    width: 100%;
    overflow-x: hidden;
}
`;

export default GlobalStyles;
