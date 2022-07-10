import React from 'react'
import { BrandBox } from './badge.style'

export function BrandHit() {
  return (
    <BrandBox>HIT!</BrandBox>
  )
}
export function BrandDiscount() {
  return (
    <BrandBox color='error-primary'>-50%</BrandBox>
  )
}
