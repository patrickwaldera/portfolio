import { createGlobalStyle } from "styled-components";

export default createGlobalStyle `
    *, body {
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        margin: 0;
        padding: 0;
        border: 0;
        box-sizing: border-box;
    }

    ol, ul, li {
        list-style: none;
        list-style-type: none;
    }
`