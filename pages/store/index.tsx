import React, { createContext, useState } from "react";
import { FlexBox } from "../../src/atoms/Boxes";
import Breadcrumbs from "../../src/atoms/Breadcrumbs";
import { useProduct } from "../../src/Context/ProductContext";
import LayoutBody from "../../src/layout/Layout";
import { LayoutStore, LayoutWrapper } from "../../src/layout/layout.style";
import Catalog from "../../src/organisms/Catalog";

export async function getStaticProps() {
  const res = await fetch('https://storefront-844a2-default-rtdb.firebaseio.com/products.json')
  const data = await res.json()

  return {
    props: {products: data}
  }
}
export default function Store({products}: any) {
  return (
    <LayoutBody>
      <LayoutStore>
        <Breadcrumbs>
          Home | <span className="span">Pants</span>
        </Breadcrumbs>
        <Catalog products={products} />
      </LayoutStore>
    </LayoutBody>
  );
}
