import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
} 

:root{
  font-size: 62.5%; /*10px*/
}

body{
    background: black;

    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    line-height: 130%;

    @media (max-width: 768px) {
      font-size: 1.4rem;
    }
}



`
