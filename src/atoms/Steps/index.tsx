import React, { useState } from "react";
import { FlexBox } from "../Boxes";
import { StepsContainer } from "./steps.styles";

export default function Steps() {
  const [isClicked, setisClicked] = useState("");

  if (typeof window !== "undefined") {
    var items = document.getElementsByClassName("step-box");
    for (var i = 0; i < items.length; i++) {
      items[i].addEventListener("click", function (this: any) {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
      });
    }
  }

  return (
    <StepsContainer id="navbar">
      <FlexBox className="step-box active">
        <p className="step-text">Women</p>
      </FlexBox>
      <FlexBox className="step-box">
        <p className="step-text">Men</p>
      </FlexBox>
      <FlexBox className="step-box">
        <p className="step-text">Kids</p>
      </FlexBox>
    </StepsContainer>
  );
}
