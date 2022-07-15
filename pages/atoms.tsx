import React from 'react'
import { AddedToCart, Bullets, Close, StarratingLarge, StarratingSmall } from '../src/assets/vectors'
import { ArrowsLeft, ArrowsLeftLong, ArrowsRight, ArrowsRightLong } from '../src/atoms/Arrows'
import {BrandDiscount, BrandHit} from '../src/atoms/Badge'
import { FlexBox } from '../src/atoms/Boxes'
import Breadcrumbs from '../src/atoms/Breadcrumbs'
import Button from '../src/atoms/Buttons'
import {CheckBox, Radio} from '../src/atoms/Checkbox'
import CircleIcons from '../src/atoms/CircleIcons'
import Input from '../src/atoms/Input'
import { Selectbox, SelectboxMobile } from '../src/atoms/Input/input.style'
import Price from '../src/atoms/Price'
import Property from '../src/atoms/Property'
import colors from '../src/theme/colors'

export default function Test() {
  return (
    <div style={{padding: "20px"}}>
        <ArrowsLeft/>
        <ArrowsRight/>
        <ArrowsLeftLong/>
        <ArrowsRightLong/>
        <BrandHit/>
        <BrandDiscount/>
        <Breadcrumbs>Home | Category | <span className='span'>Shirts</span></Breadcrumbs>
        <Bullets/>
        <Button variant='secondary'>Hello</Button>
        <Button variant='callToAction'>Button</Button>
        <Button variant='primary'>Button</Button>
        <Input placeholder='Your Name'>First name</Input>
        <FlexBox flexDirection='column'>
          <p>hello</p>
          <p>hi</p>
        </FlexBox>
        <CheckBox/>
        <Radio/>
        <FlexBox gap='10px'>
        <CircleIcons size='66px' hover colour={colors.brandPrimary} shadow><Close/></CircleIcons>
        <CircleIcons size='66px' hover colour={colors.errorPrimary} shadow><AddedToCart/></CircleIcons>
        <CircleIcons size='66px' hover colour={colors.errorPrimary} shadow>2</CircleIcons>
        </FlexBox>
        <Selectbox>
          <option value="">1</option>
          <option value="">2</option>
          <option value="">3</option>
        </Selectbox>
        <SelectboxMobile>
          <option value="">1</option>
          <option value="">2</option>
          <option value="">3</option>
        </SelectboxMobile>
        <Property name="hello" value=" hi"/>
        <StarratingLarge/>
        <StarratingSmall/>
        <Price price={50.01} discount={100} colour="red"/>
        <Price price={50.01} />


    </div>
  )
}
