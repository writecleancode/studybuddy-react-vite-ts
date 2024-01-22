import { createGlobalStyle } from 'styled-components';

`
    *, *::before, *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        font-family: 'Montserrat', sans-serif;   
    }

    a, button {
        font-family: inherit;
        cursor: pointer;
    }
`;
