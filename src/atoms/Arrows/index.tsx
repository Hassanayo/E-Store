import React from "react";
import { LeftArrow, RightArrow } from "../../assets/vectors";
import {
  ArrowLeft,
  ArrowLeftLong,
  ArrowRight,
  ArrowRightLong,
} from "./arrows.style";
import { ButtonProps } from "../Buttons/i-button";
export function ArrowsLeftLong({ onClick }: ButtonProps) {
  return (
    <ArrowLeftLong onClick={onClick}>
      <LeftArrow />
    </ArrowLeftLong>
  );
}
export function ArrowsRightLong({ onClick }: ButtonProps) {
  return (
    <ArrowRightLong onClick={onClick}>
      <RightArrow />
    </ArrowRightLong>
  );
}
export function ArrowsLeft({ onClick }: ButtonProps) {
  return (
    <ArrowLeft onClick={onClick}>
      <LeftArrow />
    </ArrowLeft>
  );
}
export function ArrowsRight({ onClick }: ButtonProps) {
  return (
    <ArrowRight onClick={onClick}>
      <RightArrow />
    </ArrowRight>
  );
}
