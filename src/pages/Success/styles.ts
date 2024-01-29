import styled from 'styled-components'

export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 4rem;

  header {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }

  h1 {
    font-size: 3.2rem;
    font-family: 'Baloo 2';
    font-weight: 800;

    color: ${({ theme }) => theme.colors.yellowDark};
  }

  header p {
    font-size: 2rem;
  }

  main {
    display: flex;

    padding-top: 2.4rem;

    align-items: center;

    gap: 10.2rem;
  }
`

export const OrderInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  padding: 4rem;

  gap: 3.2rem;

  border-radius: 0.6rem 3.6rem;
  background-image: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.yellow},
    ${({ theme }) => theme.colors.purple}
  );
  background-origin: border-box;
  box-shadow: inset 0 100vh ${({ theme }) => theme.colors.background};
  border: 1px solid transparent;

  > div {
    display: flex;
    flex-direction: row;

    gap: 1.2rem;

    align-items: center;

    > span {
      width: 3.2rem;
      height: 3.2rem;
      color: ${({ theme }) => theme.colors.background};
      padding: 8px;
      border-radius: 50%;
    }
  }
`

interface TagProps {
  $variant: 'yellowDark' | 'yellow' | 'purple'
}

export const Tag = styled.span<TagProps>`
  background: ${({ theme, $variant }) => theme.colors[$variant]};
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`
