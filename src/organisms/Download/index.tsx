/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { FlexBox } from '../../atoms/Boxes'
import Button from '../../atoms/Buttons'
import { DownloadSectionContainer } from './download.styles'

export default function DownloadSection() {
  return (
    <DownloadSectionContainer>
        <div>
            <p className='d-title'>Fashion To Take Away</p>
            <h3 className='d-details'>Download our app on your phone</h3>
            <FlexBox gap='10px'>
                <img src="./btn-img1.png" alt=""  />
                <img src="./btn-img2.png" alt=""  />
                
            </FlexBox>
        </div>



    </DownloadSectionContainer>
  )
}
