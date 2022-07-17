import React from "react";
import { FAB } from "./circleIcons.style";
import { FABProps } from "./circleIcons.style";

export default function CircleIcons({
  size,
  shadow,
  children,
  colour,
}: FABProps) {
  return (
    <FAB size={size} shadow={shadow} colour={colour}>
      {children}
    </FAB>
  );
}
