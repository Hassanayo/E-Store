import React from "react";
import { PriceContainer } from "./price.style";
interface PriceProps {
  price?: Number;
  discount?: Number;
  colour?: string;
}

export default function Price({ price, discount, colour }: PriceProps) {
  return (
    <PriceContainer colour={colour}>
      $ {price} <span>{discount}</span>
    </PriceContainer>
  );
}
