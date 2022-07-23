import React, { createContext, useState } from "react";
import { FlexBox } from "../../src/atoms/Boxes";
import Breadcrumbs from "../../src/atoms/Breadcrumbs";
import { useProduct } from "../../src/Context/ProductContext";
import LayoutBody from "../../src/layout/Layout";
import { LayoutStore, LayoutWrapper } from "../../src/layout/layout.style";
import Catalog from "../../src/organisms/Catalog";

export default function Store() {
  // const [cart, setCart] = useState<{}[]>([]);
  

  // function addToCart(product: any) {
  //   setCart([...cart, product]);
  // }

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
