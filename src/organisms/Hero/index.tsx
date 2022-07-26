import { useRouter } from "next/router";
import React from "react";
import { FlexBox } from "../../atoms/Boxes";
import Button from "../../atoms/Buttons";
import { Routes } from "../../constants/navigation";
import { HeroContainer } from "./hero.style";

export default function Hero() {
  const router = useRouter()
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
          <Button onClick={() => router.push(Routes.store)} variant="callToAction" width="172px" height="51px">
            LEARN MORE
          </Button>
        </div>
      </FlexBox>
      <div></div>
      
    </HeroContainer>
  );
}
