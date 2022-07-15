
import { createGlobalStyle } from "styled-components";
import reset from "./reset";

const GlobalStyles = createGlobalStyle`
${reset};
::-moz-selection { /* Code for Firefox */
  color: #fff;
  background: #5ECE7B;
}
::selection {
    color: #fff;
    background: #5ECE7B;
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
