/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Close } from "../../assets/vectors";
import { FlexBox } from "../../atoms/Boxes";
import { FAB } from "../../atoms/CircleIcons/circleIcons.style";
import Property from "../../atoms/Property";
import { theme } from "../../theme";
import { CartItemContainer } from "./cartItem.style";
interface CartProps{
    source: string
    price: number
    name: string
    onDelete: () => void
    id: number
}

export default function CartItem({source, price, name, onDelete}: CartProps) {
  return (
    <CartItemContainer>
      <div className="fab">
        <FAB onClick={onDelete} size="26px" colour={theme.colors?.brandPrimary}><Close colour="white"/></FAB>
      </div>
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
