import styled from 'styled-components'

export const CatalogCard = styled.div`
  display: flex;
  max-width: 25.6rem;
  flex-direction: column;

  padding: 2rem;
  align-items: center;

  background: ${({ theme }) => theme.colors.card};

  border-radius: 6px 3.6rem;

  img {
    width: 12rem;
    height: 12rem;

    margin-top: -4rem;

    margin-bottom: 1.6rem;
  }

  h2 {
    font-family: 'Baloo 2';
    text-transform: capitalize;
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.subtitle};

    margin-bottom: 0.8rem;
  }

  p {
    font-size: 1.4rem;
    text-align: center;
    color: ${({ theme }) => theme.colors.label};
    font-weight: 400;

    margin-bottom: 3.3rem;
  }
`

export const TagWrapper = styled.div`
  display: flex;
  gap: 4px;
  margin-bottom: 2rem;
  span {
    padding: 4px 8px;
    border-radius: 100px;
    background: ${({ theme }) => theme.colors.yellowLight};
    font-size: 1rem;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.yellowDark};
    line-height: 100%;
  }
`
export const CartCard = styled.div`
  background: ${({ theme }) => theme.colors.card};
`

export const Buy = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  span {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.text};
    span {
      font-family: 'Baloo 2';
      font-size: 2.4rem;
      font-weight: 800;
    }
  }
`

export const Counter = styled.div`
  background: ${({ theme }) => theme.colors.button};

  padding: 0.8rem;
  gap: 0.4rem;
  display: inline-flex;
  height: 3.2rem;
  flex-shrink: 0;

  margin-right: 0.8rem;
  border-radius: 6px;
  input {
    background: transparent;
    border: none;
    width: 2rem;
    text-align: center;

    font-family: 'Roboto', sans-serif;

    color: ${({ theme }) => theme.colors.title};
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: transparent;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.purple};

    &:hover {
      color: ${({ theme }) => theme.colors.purpleDark};
    }
  }
`

export const CartButton = styled.button`
  background: ${({ theme }) => theme.colors.purpleDark};
  color: ${({ theme }) => theme.colors.card};

  border: none;
  border-radius: 6px;
  padding: 0.8rem;

  transition: 0.2s;

  line-height: 0;

  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.purple};
  }
`
