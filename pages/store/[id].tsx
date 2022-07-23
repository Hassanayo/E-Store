import React from "react";
import LayoutBody from "../../src/layout/Layout";
import { LayoutStore } from "../../src/layout/layout.style";
import ProductPage from "../../src/organisms/ProductPage";

export default function DynamicPage() {
  return (
    <LayoutBody>
      <LayoutStore>
        <ProductPage />
      </LayoutStore>
    </LayoutBody>
  );
}
