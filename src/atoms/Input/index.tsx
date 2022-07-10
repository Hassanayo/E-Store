import React from 'react'
import { InputComponent, InputContainer } from './input.style'
interface InputProps {
    children: React.ReactNode
}

export default function Input({ children }: InputProps) {
  return (
    <InputContainer action=''>
        <label className='label'>First Name:</label>
        <InputComponent required />
    </InputContainer>
    
  )
}
