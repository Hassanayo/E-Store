import React from "react";
import { StarratingSmall } from "../../assets/vectors";
import { FlexBox } from "../../atoms/Boxes";
import Price from "../../atoms/Price";
import { ProductcardContainer } from "./productCard.style";

interface CardProps {
  source: string;
  name: string;
  price: number;
}

export default function ProductCard({ source, name, price }: CardProps) {
  return (
    <ProductcardContainer>
      <div className="product-box">
        <div className="product-img">
          <img className="" src={source} alt="" />
        </div>
        <FlexBox flexDirection="column">
          <p>{name}</p>
          <Price price={price} colour="black" />
          <FlexBox gap="10px">
            <StarratingSmall />
            <p>8 reviews</p>
          </FlexBox>
        </FlexBox>
      </div>
    </ProductcardContainer>
  );
}
