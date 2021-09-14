import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --white: #fff;
    --dark-gray: #2B2D42;
    --light-gray: #2F3249;
    --blue: #3F51B5;
    --black: #000;
    --pink: #FF4D6D;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: 0;
  }

  body {
    color: var(--white);
    background: var(--dark-gray);
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: Arial, Helvetica, sans-serif;
    overflow-x: hidden;
  }
`