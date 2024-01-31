import { ReactNode } from 'react'
import { ErrorMessage, InputContainer } from './styles'
import { Warning } from 'phosphor-react'

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
    <InputContainer>
      {children}
      {$optional && <span>Opcional</span>}
      {errorMessage && (
        <ErrorMessage title={errorMessage}>
          <Warning />
        </ErrorMessage>
      )}
    </InputContainer>
  )
}
