import Image from "next/image";
import React from "react";
import { CartBlack, HeartBlack, PersonIcon } from "../../assets/vectors";
import { FlexBox } from "../../atoms/Boxes";
import Steps from "../../atoms/Steps";
import { Searchbar } from "../../molecules/Searchbar";
import { HeaderContainer } from "./header.style";

export default function Header() {
  return (
    <HeaderContainer>
      <FlexBox >
        <FlexBox alignItems="center" gap="80px">
          <img src="/StoreLogo.png"  alt="Logo" />
          <FlexBox>
            <Steps />
          </FlexBox>
        </FlexBox>
        
      </FlexBox>
      <FlexBox alignItems="center" gap="40px">
          <Searchbar/>
          <FlexBox gap="30px">
            <PersonIcon/>
            <HeartBlack/>
            <CartBlack/>
          </FlexBox>
        </FlexBox>
    </HeaderContainer>
  );
}
