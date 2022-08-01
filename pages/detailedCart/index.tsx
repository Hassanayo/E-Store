import React from "react";
import { FlexBox } from "../../src/atoms/Boxes";
import { useCart } from "../../src/Context/CartContext";
import LayoutBody from "../../src/layout/Layout";
import CartItem from "../../src/molecules/CartItem";
import DetailedCartItem from "../../src/molecules/DetailedCartItem";
import Invoice from "../../src/molecules/Invoice";
import BigCart, { BigCartBody } from "../../src/organisms/BigCart";

export default function DetailedCart() {
  const { cart } = useCart();
  return (
    <LayoutBody>
      <BigCartBody/>
    </LayoutBody>
  );
}
