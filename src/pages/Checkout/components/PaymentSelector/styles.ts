import styled from 'styled-components'
import { baseContentStyles } from '../../styles'

export const PaymentSelectorContainer = styled(baseContentStyles)`
  header svg {
    color: ${({ theme }) => theme.colors.purple};
  }

  button {
    display: flex;

    align-items: center;
    justify-content: center;
    border: 1px solid transparent;

    border-radius: 6px;

    padding: 1.6rem;

    gap: 1.2rem;

    &:hover {
      background: ${({ theme }) => theme.colors.hover};
    }

    &:active {
      background: ${({ theme }) => theme.colors.purpleLight};
      border: 1px solid ${({ theme }) => theme.colors.purple};
    }

    svg {
      font-size: 1.6rem;
      color: ${({ theme }) => theme.colors.purple};
    }
  }
`

export const PaymentsWrapper = styled.div`
  display: flex;
  gap: 1.2rem;
`

export const TitleAndSubtitle = styled.div`
  display: flex;
  flex-direction: column;

  font-family: 'Roboto', sans-serif;

  h3 {
    color: ${({ theme }) => theme.colors.subtitle};
  }
  p {
    color: ${({ theme }) => theme.colors.text};
  }
`
