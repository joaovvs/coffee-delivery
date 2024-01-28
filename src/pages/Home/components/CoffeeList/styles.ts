import styled from 'styled-components'

export const CoffeeListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  h1 {
    font-family: 'Baloo 2';
    font-size: 3.2rem;
    font-weight: 800;

    color: ${({ theme }) => theme.colors.subtitle};
  }

  > div {
    display: flex;
    flex-wrap: wrap;

    gap: 3.2rem;
  }
`
