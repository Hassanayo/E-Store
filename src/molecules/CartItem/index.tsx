/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FlexBox } from "../../atoms/Boxes";
import Property from "../../atoms/Property";
import { CartItemContainer } from "./cartItem.style";
interface CartProps{
    source: string
    price: number
    name: string
}

export default function CartItem({source, price, name}: CartProps) {
  return (
    <CartItemContainer>
      <div className="img-box">
        <img src={source} alt="" />
      </div>

      <FlexBox
        className="details-box"
        flexDirection="column"
        justifyContent="space-between"
      >
        <div>
          <p className="product-name">{name}</p>
          <p className="price">$ {price}</p>
          <div className="property-box">
            <Property name="Size:" value="XS" />
          </div>
        </div>
        <div>
          <p className="cart-detail">Save for later</p>
          <p className="cart-detail">Add to compare</p>
        </div>
      </FlexBox>
    </CartItemContainer>
  );
}
