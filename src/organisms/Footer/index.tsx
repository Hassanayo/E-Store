/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FlexBox } from "../../atoms/Boxes";
import { FooterContainer } from "./footer.style";

export default function Footer() {
  return (
    <FooterContainer>
      <FlexBox justifyContent="center">
        <FlexBox className="f-box" flexDirection="column">
          <h5>ABOUT US</h5>
          <p>Who we are</p>
          <p>Quality in the details</p>
          <p>Customer Reviews</p>
        </FlexBox>
        <FlexBox className="f-box" flexDirection="column">
          <h5>DEPARTMENTS</h5>
          <p>Women Fashion</p>
          <p>Men Fashion</p>
          <p>Kids Wear</p>
          <p>Home</p>
        </FlexBox>
        <FlexBox className="f-box" flexDirection="column">
          <h5>HELP</h5>
          <p>Customer Service</p>
          <p>Size Guide</p>
          <p>Contact Us</p>
        </FlexBox>
        <FlexBox className="f-box" flexDirection="column" gap="40px">
          <div>
            <h5>PAYMENT & DELIVERY</h5>
            <p>Purchase Terms</p>
            <p>Guarantee</p>
          </div>
          <div>
          <h5>SOCIAL</h5>
          <img src="/socials.png" alt="" />
          </div>
        </FlexBox>
      </FlexBox>
    </FooterContainer>
  );
}
