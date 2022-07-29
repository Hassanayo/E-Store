/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
import { FlexBox } from "../../atoms/Boxes";
import Button from "../../atoms/Buttons";
import { GridBox } from "../../atoms/GridSystem";
import { BannerContainer } from "./banner.styles";

export default function Banner() {
  return (
    <BannerContainer>
      <GridBox grid="banner">
        <div className="banner-box">
          <p className="banner-title">Scarves</p>
          <h3 className="banner-header">COCKTAIL & PARTY</h3>
          <p className="banner-details">
            Find stunning women's cocktail dresses and party dresses. Stand out
            in lace and metallic cocktail dresses and party dresses from all
            your favorite brands.
          </p>
          <div>
            <Button variant="primary" width="195px" height="52px">
              Button
            </Button>
          </div>
        </div>
        <div className="two-col">
          <div
            className="banner-box"
            style={{ backgroundImage: `url("./shirt-banner.png")` }}
          >
            <p className="banner-title">T-Shirts</p>
            <h3 className="banner-header">THE OFFICE LIFE</h3>
            <div>
              <Button variant="primary" width="195px" height="52px">
                Button
              </Button>
            </div>
          </div>
          <div
            className="banner-box"
            style={{ backgroundImage: `url("./sandals-banner.png")` }}
          >
            <p className="banner-title">Shoes</p>
            <h3 className="banner-header">ECO SANDALS</h3>
            <div>
              <Button variant="primary" width="195px" height="52px">
                Button
              </Button>
            </div>
          </div>
        </div>
      </GridBox>
    </BannerContainer>
  );
}
export function BannerTwo() {
  return (
    <BannerContainer>
      <FlexBox
        className="title-box"
        flexDirection="column"
        justifyContent="center"
      >
        <p className="b2-title">Share Your Look</p>
        <p className="hashtag">#YOURLOOK</p>
      </FlexBox>
      <FlexBox justifyContent="center" gap="20px">
        <div className="yl-box">
          <img src="./yourlook1.png" alt="" />
        </div>
        <div className="yl-box">
          <img src="./yourlook2.png" alt="" />
        </div>
      </FlexBox>
    </BannerContainer>
  );
}
