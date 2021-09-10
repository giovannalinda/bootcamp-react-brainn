import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --white: #fff;
    --pink: #ff3366;
    --black: #000;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: 0;
  }

  body {
    background: var(--white);
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: Arial, Helvetica, sans-serif;
    overflow-x: hidden;
  }
`