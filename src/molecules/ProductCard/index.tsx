/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import { StarratingSmall } from "../../assets/vectors";
import { FlexBox } from "../../atoms/Boxes";
import CircleIcons from "../../atoms/CircleIcons";
import Price from "../../atoms/Price";
import colors from "../../theme/colors";
import { ProductcardContainer } from "./productCard.style";

interface CardProps {
  source: string;
  name: string;
  price: number;
  click?: any;
  id?: any;
  clickProduct?: () => void
}

export default function ProductCard({ source, name, price, click, clickProduct }: CardProps) {
  return (
    <ProductcardContainer onClick={clickProduct}>
      <div className="product-box">
        <div className="product-img">
          <Image layout="responsive" width={300} height={450} className="" src={source} alt="" />
        </div>
        <FlexBox flexDirection="column">
          <p>{name}</p>
          <Price price={price} colour="black" />
          <FlexBox gap="10px" justifyContent="space-between">
            <StarratingSmall />
            <div className="card-fab">
              <CircleIcons
                onClick={click}
                size="26px"
                colour={colors.brandPrimary}
              >
                +
              </CircleIcons>
            </div>
          </FlexBox>
        </FlexBox>
      </div>
    </ProductcardContainer>
  );
}
