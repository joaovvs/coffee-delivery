import styled from 'styled-components'
import backgroundImg from '../../../../assets/background.png'

export const IntroContainer = styled.section`
  display: flex;

  padding: 9.4rem 16rem;

  background: url(${backgroundImg}) no-repeat top center/cover;

  background-clip: border-box;

  gap: 5.6rem;

  h1 {
    font-family: 'Baloo 2';
    font-size: 4.8rem;
    font-weight: 800;

    color: ${({ theme }) => theme.colors.title};
    line-height: 130%;
  }

  p {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.subtitle};
  }

  img {
    width: 47.6rem;
    height: 36rem;
  }
`

export const Table = styled.table`
  margin-top: 6.6rem;
  gap: 4rem;
  width: 100%;

  td {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    width: 50%;

    span {
      color: ${({ theme }) => theme.colors.text};
    }
  }

  tr {
    display: flex;
    align-items: center;
  }
  tr + tr {
    margin-top: 2rem;
  }
`
interface ItemIconProps {
  $variant: 'yellowDark' | 'yellow' | 'purple' | 'text'
}
export const ItemIcon = styled.div<ItemIconProps>`
  width: 3.2rem;
  height: 3.2rem;
  padding: 8px;

  font-size: 1.6rem;

  border-radius: 50%;
  margin-right: 1.2rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  background: ${({ theme, $variant }) => theme.colors[$variant]};
  color: ${({ theme }) => theme.colors.background};
`
