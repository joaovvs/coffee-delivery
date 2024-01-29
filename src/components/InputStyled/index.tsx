import { ReactNode } from 'react'
import { ErrorMessage, InputContainer } from './styles'

interface InputProps {
  $optional?: boolean
  children: ReactNode
  errorMessage?: string | null
}

export function InputStyled({
  $optional = false,
  children,
  errorMessage,
}: InputProps) {
  return (
    <>
      <InputContainer>
        {children}
        {$optional && <span>Opcional</span>}
      </InputContainer>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </>
  )
}
