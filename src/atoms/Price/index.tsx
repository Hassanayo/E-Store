import React from "react";
import { PriceContainer } from "./price.style";
interface PriceProps {
  price?: any;
  discount?: Number | React.ReactNode | any;
  colour?: string;
}

export default function Price({ price, discount, colour }: PriceProps) {
  return (
    <PriceContainer colour={colour}>
      <p>$ {price} <span>{discount}</span></p>
    </PriceContainer>
  );
}
