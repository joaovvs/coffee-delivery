import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 100%;
  height: calc(100vh - 10rem);

  padding: 3.2rem 16rem;

  background-color: black;

  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`
