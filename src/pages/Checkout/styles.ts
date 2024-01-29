import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: auto;

  padding-top: 4rem;

  gap: 3.2rem;

  h2 {
    font-family: 'Baloo 2';
    font-size: 1.8rem;
    font-weight: 700;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }

  a {
    display: flex;
    flex: 1;

    text-decoration: none;

    align-items: center;
    justify-content: center;

    border: none;

    padding: 1.2rem 0.8rem;

    border-radius: 6px;

    background: ${({ theme }) => theme.colors.button};
    color: ${({ theme }) => theme.colors.text};
    font-weight: 700;
    text-transform: uppercase;
    font-size: 1.2rem;

    cursor: pointer;

    transition: 0.2s;

    &:hover {
      background: ${({ theme }) => theme.colors.label};
    }
  }
`
const baseContentStyles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  padding: 4rem;

  background: ${({ theme }) => theme.colors.card};

  border-radius: 6px;

  header {
    display: flex;
    flex-direction: row;

    align-items: flex-start;

    gap: 0.8rem;

    svg {
      font-size: 2.2rem;
    }
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

export const FormContainer = styled(baseContentStyles)`
  header svg {
    color: ${({ theme }) => theme.colors.yellowDark};
  }

  form {
    display: flex;
    flex-direction: column;

    gap: 1.2rem;

    :first-child {
      width: 35%;
    }

    :nth-child(3) {
      display: flex;
      gap: 1.2rem;

      div:first-child {
        width: 35%;
      }

      div:last-child {
        flex: 1;
      }
    }

    :nth-child(4) {
      display: flex;
      gap: 1.2rem;

      div:first-child {
        width: 35%;
      }

      div:nth-child(2) {
        flex: 1;
      }

      div:last-child {
        width: 10.7%;
      }
    }
  }
`

export const PaymentSelector = styled(baseContentStyles)`
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

export const SelectedCoffees = styled(baseContentStyles)`
  display: flex;

  width: 44.8rem;

  border-top-right-radius: 4.4rem;
  border-bottom-left-radius: 4.4rem;
`

export const Divider = styled.div`
  display: flex;
  flex: 1;

  border-bottom: 1px solid ${({ theme }) => theme.colors.button};

  margin-top: 2.4rem;
  margin-bottom: 2.4rem;
`

export const ValuesWrapper = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1.2rem;

  div:last-child {
    font-size: 2rem;
    font-weight: 700;
  }
`

export const Value = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;

  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.text};
`

export const ConfirmButton = styled.button`
  display: flex;
  flex: 1;

  align-items: center;
  justify-content: center;

  border: none;

  padding: 1.2rem 0.8rem;

  border-radius: 6px;

  background: ${({ theme }) => theme.colors.yellow};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  text-transform: uppercase;

  cursor: pointer;

  transition: 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.yellowDark};
  }
`
