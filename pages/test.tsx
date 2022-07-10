import React from 'react'
import { Bullets } from '../src/assets/vectors'
import { ArrowsLeft, ArrowsLeftLong, ArrowsRight, ArrowsRightLong } from '../src/atoms/Arrows'
import { ArrowLeft, ArrowLeftLong, ArrowRight, ArrowRightLong } from '../src/atoms/Arrows/arrows.style'
import {BrandDiscount, BrandHit} from '../src/atoms/Badge'
import Breadcrumbs from '../src/atoms/Breadcrumbs'
import Button from '../src/atoms/Buttons'
import Input from '../src/atoms/Input'

export default function Test() {
  return (
    <div>
        <ArrowsLeft/>
        <ArrowsRight/>
        <ArrowsLeftLong/>
        <ArrowsRightLong/>
        <BrandHit/>
        <BrandDiscount/>
        <Breadcrumbs>Home | Category | <span className='span'>Shirts</span></Breadcrumbs>
        <Bullets/>
        <Button variant='secondary' size='regular'>Hello</Button>
        <Button variant='callToAction' size='small'>Button</Button>
        <Button variant='primary'>Button</Button>
        <Input>Firtt</Input>

    </div>
  )
}
