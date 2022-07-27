import React from "react";
import { useCart } from "../../src/Context/CartContext";
import LayoutBody from "../../src/layout/Layout";
import CartItem from "../../src/molecules/CartItem";
import DetailedCartItem from "../../src/molecules/DetailedCartItem";

export default function DetailedCart() {
  const { cart } = useCart();
  return (
    <LayoutBody>
      <DetailedCartItem/>
    </LayoutBody>
  );
}
