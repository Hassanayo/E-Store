import React from "react";
import { FlexBox } from "../../src/atoms/Boxes";
import { useCart } from "../../src/context/CartContext";
import LayoutBody from "../../src/layout/Layout";
import CartItem from "../../src/molecules/CartItem";
import DetailedCartItem from "../../src/molecules/DetailedCartItem";
import Invoice from "../../src/molecules/Invoice";
import BigCart from "../../src/organisms/BigCart";

export default function DetailedCart() {
  const { cart } = useCart();
  return (
    <LayoutBody>
      <FlexBox justifyContent="space-between" >
        <BigCart/>
        <Invoice cart={cart} />
      </FlexBox>
    </LayoutBody>
  );
}
