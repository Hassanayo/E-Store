import React from "react";
import { GridContainer, ProductGrid } from "./gridSystem.style";
interface GridProps {
  grid: "banner" | "product-card";
  children?: React.ReactNode;
}

export function GridBox({ grid, children }: GridProps) {
  return grid == "banner" ? (
    <GridContainer>{children}</GridContainer>
  ) : grid == "product-card" ? (
    <ProductGrid>{children}</ProductGrid>
  ) : (
    <ProductGrid className="">{children}</ProductGrid>
  );
}
