import styled from 'styled-components'

export const InputContainer = styled.div`
  display: flex;

  padding: 1.2rem;

  border: 1px solid transparent;
  border-radius: 4px;

  background: ${({ theme }) => theme.colors.button};

  input {
    background: transparent;
    border: none;
    flex: 1;

    outline: none;
    &::placeholder {
      ${({ theme }) => theme.colors.label}
    }
  }

  span {
    font-style: italic;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.label};
  }

  input:focus::placeholder {
    color: transparent;
  }

  &:focus-within {
    border: 1px solid ${({ theme }) => theme.colors.yellowDark};

    span {
      color: transparent;
    }
  }
`

export const ErrorMessage = styled.span`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.error};
`
