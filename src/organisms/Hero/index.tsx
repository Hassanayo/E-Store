import React from 'react'
import { FlexBox } from '../../atoms/Boxes'
import Button from '../../atoms/Buttons'
import { HeroContainer } from './hero.style'

export default function Hero() {
  return (
    <HeroContainer >
        <FlexBox className='hero-content' flexDirection='column' style={{paddingRight: "100px"}}>
            <FlexBox gap='40px'>
                <span className='hero-line'></span>
                <p className='hero-minitext'>SUMMER COLLECTION 2019</p>
            </FlexBox>
            <div >
                <h1 className='hero-header'>Colorful Summer dresses are already in store</h1>
            </div>
            <Button variant="callToAction" width='172px' height="51px">Learn More</Button>
        </FlexBox>
        
    </HeroContainer>
  )
}
