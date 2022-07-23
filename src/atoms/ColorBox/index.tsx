import React from 'react'
import { ColorBoxContainer } from './colorbox.style'

export default function Color({color}: {color: string}) {
  return (
    <ColorBoxContainer color={color} />
  )
}
