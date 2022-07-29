import React, { useContext, useEffect, useState } from "react";
import { FlexBox } from "../../atoms/Boxes";
import Property from "../../atoms/Property";

import { CartContextType } from "../../@types/cart";
import { CartContextProvider, useCart } from "../../Context/CartContext";
import { useProduct } from "../../Context/ProductContext";
import Collection from "../../molecules/Collection";
import ProductCard from "../../molecules/ProductCard";
import { CatalogContainer } from "./catalog.style";
import { useRouter } from "next/router";
import Link from "next/link";
import Notifications from "../../molecules/Notification";
import colors from "../../theme/colors";

export default function Catalog() {
  const products = useProduct()
  const { cart, setCart } = useCart();
  const [alert, setAlert] = useState(false)
  const router = useRouter();
  
  
  function addToCart(product: any) {
    setCart([...cart, product]);
    setAlert(true)

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
              <Property name="Products found: " value={products.length} />
            </div>
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
                
                    <ProductCard
                      click={() => addToCart(product)}
                      key={index}
                      source={product.img}
                      name={product.productname}
                      price={product.amount}
                      id={product.id}
                    />
              );
            }
          )}
          {alert && <Notifications setIsOpen={setAlert} color={colors.notificationPrimary}/>}
        </div>
      </FlexBox>
    </CatalogContainer>
  );
}
