/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { DividerVertical, FlexBox } from "../../atoms/Boxes";
import { MenuContainer } from "./megamenu.style";

export default function Megamenu({SetIsOpen} : {SetIsOpen: any}) {
  return (
    <MenuContainer onClick={() => SetIsOpen(false)}>
      <FlexBox className="menu-content">
        <FlexBox flexDirection="row" justifyContent="center">
          <div className="menu-box">
            <h5>CLOTHING</h5>
            <p>Skirts</p>
            <p>Sweaters</p>
            <p>Dresses</p>
            <p>T-Shirts</p>
          </div>
          <div className="menu-box">
            <h5>ACCESSORIES</h5>
            <p>Bags & purses</p>
            <p>Belts</p>
            <p>Gloves</p>
            <p>Hats</p>
          </div>
          <div className="menu-box">
            <h5>SHOES</h5>
            <p>Boots</p>
            <p>Heels</p>
            <p>Flat shoes</p>
            <p>Loafers</p>
          </div>
        </FlexBox>
        <hr />
        <FlexBox >
          <div className="menu-box">
            <h5>LAST PAIRS LEFT</h5>
            <div className="img-box">
              <img src="./sandals-banner.png" alt="" />
            </div>
          </div>
          <div className="menu-box">
            <h5>LAST PAIRS LEFT</h5>
            <div className="img-box">
              <img src="./shirt-banner.png" alt="" />
            </div>
          </div>
        </FlexBox>
      </FlexBox>
    </MenuContainer>
  );
}
