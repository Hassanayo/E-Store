import React from 'react'
import { SelectContainer } from './select.style'

export function Select({children} : {children : React.ReactNode}) {
  return (
    <SelectContainer placeholder='Size'>
        {children}
    </SelectContainer>
  )
}
