import React, { useContext } from "react";
import { FlexBox } from "../../atoms/Boxes";
import Property from "../../atoms/Property";

import { CartContextType } from "../../@types/cart";
import { CartContextProvider, useCart } from "../../Context/CartContext";
import { useProduct } from "../../Context/ProductContext";
import Collection from "../../molecules/Collection";
import ProductCard from "../../molecules/ProductCard";
import { CatalogContainer } from "./catalog.style";
import { useRouter } from "next/router";
import { Routes } from "../../constants/navigation";
import Link from "next/link";

export default function Catalog({ products }: any) {
  const { cart, setCart } = useCart();
  const router = useRouter();

  function addToCart(product: any) {
    setCart([...cart, product]);
  }

  return (
    <CatalogContainer>
      <FlexBox flexDirection="column">
        <div className="categories">
          <p>Categories</p>
        </div>
        <div className="collection">
          <Collection />
        </div>
      </FlexBox>
      <FlexBox flexDirection="column" className="product-container">
        <div className="filter-options">
          <FlexBox gap="40px">
            <div>
              <p>Filters</p>
            </div>
            <div>
              <Property name="Sort by: " value="Price from high to low" />
            </div>
          </FlexBox>
          <FlexBox>
            <div>
              <Property name="Products found: " value="280" />
            </div>
            <div>View all</div>
          </FlexBox>
        </div>
        <div className="product-grid">
          {products.map(
            (
              product: {
                id: any;
                img: string;
                productname: string;
                amount: number;
              },
              index: React.Key | null | undefined
            ) => {
              return (
                <Link key={product.id} href={"/store/" + product.id}>
                  <a>
                    <ProductCard
                      click={() => addToCart(product)}
                      key={index}
                      source={product.img}
                      name={product.productname}
                      price={product.amount}
                      id={products.id}
                    />
                  </a>
                </Link>
              );
            }
          )}
        </div>
      </FlexBox>
    </CatalogContainer>
  );
}
