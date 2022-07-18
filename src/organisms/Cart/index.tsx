import React, { useState } from 'react'
import { Close } from '../../assets/vectors'
import { FlexBox } from '../../atoms/Boxes'
import CartItem from '../../molecules/CartItem'
import { CartContainer } from './cart.style'
interface ShoppingProps {
  setCartOpen: any
  addToCart: any

}

export default function ShoppingCart({setCartOpen, cart}: any ) {
  return (
    <CartContainer >
        <FlexBox flexDirection='column' gap='15px'>
          <div className='close-cart' onClick={() => setCartOpen(false)}>
            <Close colour='black'/>
          </div>
            <p>My Cart</p>
            <h4>Total Items</h4>
            {cart?.map((product, index) => (
              <CartItem key={index} name={product.productname} price={product.price} source={product.img}/>
            ))}
            
        </FlexBox>

    </CartContainer>
  )
}
