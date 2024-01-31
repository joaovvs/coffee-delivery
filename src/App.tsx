import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../src/styles/global.ts'
import { defaultTheme } from './styles/themes/default'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './routes/Router.tsx'
import { CartContextProvider } from './contexts/CartContext.tsx'
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CartContextProvider>
          <Router />
          <ToastContainer />
        </CartContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
