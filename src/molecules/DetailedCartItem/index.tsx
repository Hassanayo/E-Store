/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Close } from "../../assets/vectors";
import { FlexBox } from "../../atoms/Boxes";
import { FAB } from "../../atoms/CircleIcons/circleIcons.style";
import Property from "../../atoms/Property";
import { useCart } from "../../Context/CartContext";
import { theme } from "../../theme";
import CartItem from "../CartItem";
import { CartItemContainer } from "../CartItem/cartItem.style";
import { DetailedCartItemContainer } from "./detailedCartItem.style";

export default function DetailedCartItem() {
  const { cart } = useCart();
  return (
    <DetailedCartItemContainer>
      <div>
        <CartItemContainer>
          <div className="img-box">
            <img src="/product5.png" alt="" />
          </div>

          <FlexBox
            className="details-box"
            flexDirection="column"
            justifyContent="space-between"
          >
            <div>
              <p className="product-name">Cream Bag</p>
              <p className="price">$ {50}</p>
              <div className="property-box">
                <Property name="Size:" value="XS" />
              </div>
            </div>
            <div className="ship-details">
                <p>Usually arrives in 5-13 business days. A shipping timeline specific to your destination can be viewed in Checkout.</p>
            </div>
          </FlexBox>
        </CartItemContainer>
      </div>
      <div></div>
    </DetailedCartItemContainer>
  );
}
