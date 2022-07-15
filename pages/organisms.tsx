import React from "react";
import { Divider, FlexBox } from "../src/atoms/Boxes";
import Steps from "../src/atoms/Steps";
import { LayoutWrapper } from "../src/layout/layout.style";
import Header from "../src/organisms/Header";
import Hero from "../src/organisms/Hero";

export default function Organisms() {
  return (
    <>
      <Header />
      <LayoutWrapper>
        
        <Hero />
      </LayoutWrapper>
    </>
  );
}
