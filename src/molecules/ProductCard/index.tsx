/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { StarratingSmall } from "../../assets/vectors";
import { BrandHit } from "../../atoms/Badge";
import { FlexBox } from "../../atoms/Boxes";
import CircleIcons from "../../atoms/CircleIcons";
import Price from "../../atoms/Price";
import { Routes } from "../../constants/navigation";
import colors from "../../theme/colors";
import { ProductcardContainer } from "./productCard.style";

interface CardProps {
  source: string;
  name: string;
  price: number;
  click?: any;
  id?: any;
  clickProduct?: () => void;
}

export default function ProductCard({
  source,
  name,
  price,
  click,
  id,
}: CardProps) {
  
  const router = useRouter();
  return (
    <ProductcardContainer>
      <div className="product-box">
        <div
          className="product-img"
          onClick={() => router.push(Routes.store + id)}
        >
          <Image
            layout="responsive"
            width={300}
            height={450}
            className=""
            src={source}
            alt=""
          />
        </div>
        <div className="hit">
          <BrandHit />
        </div>

        <FlexBox flexDirection="column">
          <p>{name}</p>
          <Price price={price} colour="black" discount={price * 2} />
          <FlexBox gap="10px">
            <StarratingSmall />
            <p className="review">5 reviews</p>
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
