
import React, { createContext, useState } from "react";
import { FlexBox } from "../src/atoms/Boxes";
import Breadcrumbs from "../src/atoms/Breadcrumbs";
import { useProduct } from "../src/Context/ProductContext";
import { LayoutStore, LayoutWrapper } from "../src/layout/layout.style";
import ProductCard from "../src/molecules/ProductCard";
import Catalog from "../src/organisms/Catalog";
import Header from "../src/organisms/Header";


 
export default function Store() {
  const [cart, setCart] = useState<any[]>([]);
   


  function addToCart(product: any) {
    setCart([...cart, product]);
  }

  return (
    <>
        <Header cart={cart} setCart={setCart} />

        <LayoutStore>
          
          <Breadcrumbs>
            Home | <span className="span">Pants</span>
          </Breadcrumbs>
          <Catalog addToCart={addToCart}/>
        </LayoutStore>
    </>
  );
}
