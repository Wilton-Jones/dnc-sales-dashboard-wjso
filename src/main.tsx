import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components' // Provedor de tema pra aplicacao toda
import App from './App.tsx'
import { GlobalStyle, lighTheme } from './styles'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={lighTheme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </StrictMode>
)
