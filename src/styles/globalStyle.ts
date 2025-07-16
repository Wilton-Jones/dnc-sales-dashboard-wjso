import { createGlobalStyle } from 'styled-components'
// import { DefaultTheme } from 'styled-components' // Serve para tipar o tema usado com ThemeProvider, garantindo autocomplete e verificação de tipos no TypeScript.

export const GlobalStyle = createGlobalStyle`
    body, html {
        background: ${(props) => props.theme.appBackground};
        color: ${(props) => props.theme.appColor};
        margin: 0;
        padding: 0;
        font-family: "Inter", sans-serif;
    }
    h1, h2, p, ul, li {
        margin: 0;
        padding: 0;
    }        
`
