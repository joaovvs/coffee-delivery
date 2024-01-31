import styled from 'styled-components'
import { baseContentStyles } from '../../styles'

export const DeliveryAddressInputDataContainer = styled(baseContentStyles)`
  header svg {
    color: ${({ theme }) => theme.colors.yellowDark};
  }

  > div {
    display: flex;
    flex-direction: column;

    gap: 1.2rem;

    :first-child {
      width: 35%;
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

export const NumberAndComplement = styled.div`
  display: flex;
  gap: 1.2rem;

  div:first-child {
    width: 35%;
  }

  div:last-child {
    flex: 1;
  }
`

export const DistrictCityAndCountry = styled.div`
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
`

export const ErrorMessage = styled.span`
  position: absolute;
  top: 1rem;
  right: 1rem;
  color: ${({ theme }) => theme.colors.error};

  font-size: 3rem;
`
