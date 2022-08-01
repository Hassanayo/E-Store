import React, { createContext, useState } from "react";
import { FlexBox } from "../../src/atoms/Boxes";
import Breadcrumbs from "../../src/atoms/Breadcrumbs";
import { useProduct } from "../../src/Context/ProductContext";
import LayoutBody from "../../src/layout/Layout";
import { LayoutStore, LayoutWrapper } from "../../src/layout/layout.style";
import Catalog from "../../src/organisms/Catalog";

export default function Store({ products }: any) {
  return (
    <LayoutBody>
      <LayoutStore>
        <Catalog />
      </LayoutStore>
    </LayoutBody>
  );
}
