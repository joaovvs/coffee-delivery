import React from 'react'
import { InputContainer } from './styles'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  optional?: boolean
}

export function Input({ optional = false, ...props }: InputProps) {
  return (
    <InputContainer>
      <input {...props} />
      {optional && <span>Opcional</span>}
    </InputContainer>
  )
}
