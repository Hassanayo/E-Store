/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { ReviewCheck, StarratingSmall } from '../../assets/vectors'
import { FlexBox } from '../../atoms/Boxes'
import { ReviewContainer } from './review.style'

export function Review1() {
  return (
    <ReviewContainer>
        <FlexBox gap='5px' alignItems='center'>
            <ReviewCheck/>
            <p className="review-name">Jane D.Smith</p>
        </FlexBox>
        <FlexBox alignItems='center' gap='10px'>
            <StarratingSmall/>
            <p className="review-date">April 2019</p>
        </FlexBox>
        <FlexBox>
            <p>I was looking for a bright light for the kitchen but wanted some item more modern than a strip light. this one is perfect, very bright and looks great. I can't comment on interlation as I had an electrition instal it. Would recommend</p>
        </FlexBox>
    </ReviewContainer>
  )
}
export function Review2() {
  return (
    <div>Review2</div>
  )
}
