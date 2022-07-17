import React from "react";
import { ButtonComponent } from "./button.style";
import { ButtonProps } from "./i-button";

export default function Button({
  variant,
  children,
  width,
  height,
  onClick,
}: ButtonProps) {
  return (
    <ButtonComponent
      width={width}
      variant={variant}
      height={height}
      onClick={onClick}
    >
      {children}
    </ButtonComponent>
  );
}
