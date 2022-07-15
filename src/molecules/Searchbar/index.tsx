import React from 'react'
import { SearchIcon } from '../../assets/vectors'
import { FlexBox } from '../../atoms/Boxes'
import { SearchbarButton, SearchbarButtonSmall } from './searchbar.style'

export function Searchbar() {
  return (
    <SearchbarButton >
        <FlexBox gap='99px' alignItems='center'>
            <SearchIcon/>
            <input className='text-bold' type="search" name="" id="" placeholder='Search for items'/>
        </FlexBox>
    </SearchbarButton>
  )
}
export function SearchbarSmall() {
  return (
    <SearchbarButtonSmall >
        <FlexBox gap='px' alignItems='center'>
            <input className='text-light' type="search"  placeholder='Search for items and promotions'/>
            <SearchIcon/>
            
        </FlexBox>
    </SearchbarButtonSmall>
  )
}
