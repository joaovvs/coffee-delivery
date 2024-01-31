import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 100%;
  height: 100dvh;
  overflow-y: scroll;

  padding: 3.2rem 0;

  background-color: ${({ theme }) => theme.colors.background};

  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`
