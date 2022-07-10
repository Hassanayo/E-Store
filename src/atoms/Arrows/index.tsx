import React from 'react'
import { LeftArrow, RightArrow } from '../../assets/vectors'
import { ArrowLeft, ArrowLeftLong, ArrowRight, ArrowRightLong } from './arrows.style'

export function ArrowsLeftLong() {
  return (
    <ArrowLeftLong>
      <LeftArrow/>
    </ArrowLeftLong>
  )
}
export function ArrowsRightLong() {
  return (
    <ArrowRightLong>
      <RightArrow/>
    </ArrowRightLong>
  )
}
export function ArrowsLeft() {
  return (
    <ArrowLeft>
      <LeftArrow/>
    </ArrowLeft>
  )
}
export function ArrowsRight() {
  return (
    <ArrowRight>
      <RightArrow/>
    </ArrowRight>
  )
}
