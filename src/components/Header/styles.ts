import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  width: 100%;

  padding: 3.2rem 16rem;

  align-items: center;
  justify-content: space-between;

  img {
    height: 4rem;
    width: 8.495rem;
  }

  div {
    display: flex;
    gap: 1.2rem;
  }

  span {
    display: flex;
    align-items: center;
    background: ${({ theme }) => theme.colors.purpleLight};

    padding: 0.8rem;
    border-radius: 6px;

    gap: 0.4rem;

    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.purpleDark};

    svg {
      color: ${({ theme }) => theme.colors.purple};
      font-size: 2.2rem;
    }
  }

  button {
    display: flex;
    position: relative;

    border: none;
    border-radius: 6px;

    background: ${({ theme }) => theme.colors.yellowLight};

    padding: 0.8rem;

    color: ${({ theme }) => theme.colors.yellowDark};
    font-size: 2.2rem;

    transition: scale 0.2s;

    cursor: pointer;
    &:hover:not(:disabled) {
      transform: scale(1.2);
    }

    &:hover:not(:disabled) {
      transform: scale(1.1);
    }

    &:disabled {
      cursor: not-allowed;
    }

    span {
      display: flex;
      align-items: center;
      justify-content: center;

      position: absolute;
      top: 0;
      right: 0;
      padding: 0.8rem;

      width: 2rem;
      height: 2rem;

      margin-top: -8px;
      margin-right: -8px;

      border-radius: 1000px;
      background: ${({ theme }) => theme.colors.yellowDark};
      color: ${({ theme }) => theme.colors.white};
      font-size: 1.2rem;
      line-height: 0;
    }
  }
`
