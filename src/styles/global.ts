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
    background: ${({ theme }) => theme.colors.background};

    font-family: 'Roboto', 'sans-serif';
    font-size: 1.6rem;
    line-height: 130%;

    @media (max-width: 768px) {
      font-size: 1.4rem;
    }
}

input[type="number"] {
  -moz-appearance: textfield; /* Firefox */
}
        
input[type="number"]::-webkit-inner-spin-button, input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

`
