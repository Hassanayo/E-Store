import React from "react";
import { FlexBox } from "../../atoms/Boxes";
import Button from "../../atoms/Buttons";
import Megamenu from "../MegaMenu";
import { HeroContainer } from "./hero.style";

export default function Hero() {
  return (
    <HeroContainer>
      <FlexBox className="hero-content" flexDirection="column">
        <FlexBox gap="40px">
          <span className="hero-line"></span>
          <p className="hero-minitext">SUMMER COLLECTION 2019</p>
        </FlexBox>
        <div>
          <h1 className="hero-header">
            Colorful Summer dresses are already in store
          </h1>
        </div>
        <div className="hero-btn">
          <Button variant="callToAction" width="172px" height="51px">
            LEARN MORE
          </Button>
        </div>
      </FlexBox>
      <div></div>
      
    </HeroContainer>
  );
}
