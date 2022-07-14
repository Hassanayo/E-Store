import React from 'react'
import { FlexBox } from '../../atoms/Boxes'
import Button from '../../atoms/Buttons'
import { CallToActionContainer } from './callToAction.style'

export default function CallToAction() {
  return (
    <CallToActionContainer>
        <FlexBox flexDirection='column'>
            <p className="big-text">Subscribe to Newsletters</p>
            <p className="small-text">Be aware of upcoming sales and events. Receive gifts and special offers</p>
        </FlexBox>
        <FlexBox>
            <Button variant='callToAction' width='159' height='51'>SUBSCRIBE</Button>
        </FlexBox>
    </CallToActionContainer>
  )
}
