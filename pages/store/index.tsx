import React, { createContext, useState } from "react";
import { FlexBox } from "../../src/atoms/Boxes";
import Breadcrumbs from "../../src/atoms/Breadcrumbs";
import { useProduct } from "../../src/context/ProductContext";
import LayoutBody from "../../src/layout/Layout";
import { LayoutStore, LayoutWrapper } from "../../src/layout/layout.style";
import Catalog from "../../src/organisms/Catalog";

export default function Store({ products }: any) {
  return (
    <LayoutBody>
      <LayoutStore>
        <Breadcrumbs>
          Home | <span className="span">Pants</span>
        </Breadcrumbs>
        <Catalog />
      </LayoutStore>
    </LayoutBody>
  );
}
