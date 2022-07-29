/* eslint-disable @next/next/no-img-element */
import router from "next/router";
import React from "react";
import { PersonIcon, HeartBlack, CartBlack } from "../../assets/vectors";
import { FlexBox } from "../../atoms/Boxes";
import { Routes } from "../../constants/navigation";
import { SearchbarSmall } from "../../molecules/Searchbar";
import ShoppingCart from "../../organisms/Cart";
import Megamenu from "../../organisms/MegaMenu";
import { MobileHeaderContainer } from "./mobileHeader.style";

export default function MobileHeader() {
  return (
    <MobileHeaderContainer>
      <FlexBox>
        <FlexBox alignItems="center" gap="50px">
          <div style={{ cursor: "pointer" }}>
            <img
              onClick={() => router.push(Routes.home)}
              src="/StoreLogo.png"
              alt="Logo"
            />
          </div>
        </FlexBox>
      </FlexBox>
      <FlexBox alignItems="center" gap="40px">
        <FlexBox gap="30px">
          <div
            style={{ cursor: "pointer" }}
            onClick={() => router.push(Routes.detailedCart)}
          >
            <PersonIcon />
          </div>
          <HeartBlack />
          <div style={{ cursor: "pointer" }} >
            <CartBlack />
          </div>
        </FlexBox>
      </FlexBox>
    </MobileHeaderContainer>
  );
}
