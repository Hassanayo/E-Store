import React from "react";
import LayoutBody from "../../src/layout/Layout";
import { LayoutStore } from "../../src/layout/layout.style";
import ProductPage from "../../src/organisms/ProductPage";

export const getStaticPaths = async () => {
  const res = await fetch(
    "https://storefront-844a2-default-rtdb.firebaseio.com/products.json"
  );
  const data = await res.json();

  const paths = data.map((item: any) => {
    return {
      params: { id: item.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  const res = await fetch(
    "https://storefront-844a2-default-rtdb.firebaseio.com/products/" +
      `${id}.json`
  );

  const data = await res.json();
  return {
    props: { products: data },
  };
};
export default function DynamicPage({ products }: any) {
  return (
    <LayoutBody>
      <LayoutStore>
        <ProductPage products={products} />
      </LayoutStore>
    </LayoutBody>
  );
}
