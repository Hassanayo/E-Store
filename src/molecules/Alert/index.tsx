import React from "react";
import { ClockIcon } from "../../assets/vectors";
import { IconProps } from "../../assets/vectors";
import { FlexBox } from "../../atoms/Boxes";
import { AlertBox } from "./alert.styles";
export default function Alert({ colour }: IconProps) {
  return (
    <AlertBox>
      <ClockIcon colour={colour} />
      <p style={{ color: `${colour}` }}>Low in stock</p>
    </AlertBox>
  );
}
