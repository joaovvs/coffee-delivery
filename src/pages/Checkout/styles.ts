import styled from 'styled-components'

export const CheckoutFormContainer = styled.form`
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
export const baseContentStyles = styled.div`
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
