import React from 'react'
import { FlexBox } from '../../atoms/Boxes'
import { CollectionContainer } from './collection.style'

export default function Collection() {
  return (
   <CollectionContainer>
    <h5 className='heading'>Clothing</h5>
    <FlexBox justifyContent='space-between'>
        <p>All</p>
        <p>280</p>
    </FlexBox>
    <FlexBox justifyContent='space-between'>
        <p>Skirts</p>
        <p>12</p>
    </FlexBox>
    <FlexBox justifyContent='space-between'>
        <p>Sweaters</p>
        <p>15</p>
    </FlexBox>
    <FlexBox justifyContent='space-between'>
        <p>Dresses</p>
        <p>40</p>
    </FlexBox>
   </CollectionContainer>
  )
}
