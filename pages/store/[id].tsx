import React from "react";
import LayoutBody from "../../src/layout/Layout";
import { LayoutStore } from "../../src/layout/layout.style";
import ProductPage from "../../src/organisms/ProductPage";


export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:8000/products")
  const data = await res.json()

  const paths = data.map(((item : any) => {
    return {
      params: {id: item.id.toString()}
    }
  }))
  return {
    paths,
    fallback: false
  }
}
export default function DynamicPage() {
  return (
    <LayoutBody>
      <LayoutStore>
        <ProductPage  />
      </LayoutStore>
    </LayoutBody>
  );
}
