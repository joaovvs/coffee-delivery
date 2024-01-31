import styled from 'styled-components'
import { baseContentStyles } from '../../styles'

export const PaymentContainer = styled(baseContentStyles)`
  header svg {
    color: ${({ theme }) => theme.colors.purple};
  }

  select {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
`

export const PaymentsWrapper = styled.div`
  display: flex;
  gap: 1.2rem;

  input {
    opacity: 1;
    cursor: pointer;
  }
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

interface SelectButtonProps {
  $isSelected: boolean
}

export const SelectButton = styled.button<SelectButtonProps>`
  display: flex;

  align-items: center;
  justify-content: center;
  border: 1px solid transparent;

  border-radius: 6px;

  padding: 1.6rem;

  gap: 1.2rem;

  background: ${({ theme, $isSelected }) =>
    $isSelected ? theme.colors.purpleLight : 'transparent'};
  border: 1px solid
    ${({ theme, $isSelected }) =>
      $isSelected ? theme.colors.purple : 'transparent'};

  &:hover {
    background: ${({ theme, $isSelected }) =>
      $isSelected === false && theme.colors.hover};
  }

  svg {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.purple};
  }
`

export const ErrorMessage = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  color: ${({ theme }) => theme.colors.error};
  font-size: 3rem;
`
