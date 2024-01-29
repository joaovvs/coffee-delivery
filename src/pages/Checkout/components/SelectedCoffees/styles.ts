import styled from 'styled-components'
import { baseContentStyles } from '../../styles'

export const SelectedCoffeesContainer = styled(baseContentStyles)`
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
