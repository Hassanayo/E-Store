import React from 'react'
import { ButtonComponent } from './button.style'
import { ButtonProps } from './i-button'

  

export default function Button({variant, children, size}: ButtonProps) {
  return (
    <ButtonComponent size={size} variant={variant}>
        {children}
    </ButtonComponent>
  )
}
