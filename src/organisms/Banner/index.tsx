/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { FlexBox } from "../../atoms/Boxes";
import Button from "../../atoms/Buttons";
import { BannerContainer } from "./banner.styles";

export default function Banner() {
  return (
    <BannerContainer>
      <div className="two-rows">
        <div className="upper-row">
          <FlexBox className="content-box" flexDirection="column">
            <p className="banner-title">Scarves</p>
            <h3 className="banner-header">COCKTAIL & PARTY</h3>
            <p className="banner-details">
              Find stunning women's cocktail dresses and party dresses. Stand
              out in lace and metallic cocktail dresses and party dresses from
              all your favorite brands.
            </p>
            <Button width="195px" height="52px">LEARN MORE</Button>
          </FlexBox>
        </div>
        <div className="lower-row">
          <div className="two-col">
            <div className="left-col">
              <div className="content-box">
                <p className="banner-title">T-Shirts</p>
                <h3 className="banner-header">THE OFFICE LIFE</h3>
                <Button width="195px" height="52px">LEARN MORE</Button>
              </div>
            </div>
            <div className="right-col">
            <div className="content-box">
                <p className="banner-title">Shoes</p>
                <h3 className="banner-header">ECO SANDALS</h3>
                <Button width="195px" height="52px">LEARN MORE</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
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
