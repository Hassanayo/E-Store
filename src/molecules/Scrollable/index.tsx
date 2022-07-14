import React from 'react'
import { ColorBox, FlexBox } from '../../atoms/Boxes'
import { theme } from '../../theme'
import colors from '../../theme/colors'
import { ScrollableContainer } from './scrollable.style'

export default function Scrollable({title, children} : {title: any; children: React.ReactNode}) {
  return (
    <ScrollableContainer>
        <p>{title}</p>
        <FlexBox className='scroll' flexDirection='column' gap='7px' >
            {children}
        </FlexBox>
        <p className='view-all'>View all</p>

    </ScrollableContainer>
  )
}
