import React, { useState } from "react";
import { FlexBox } from "../src/atoms/Boxes";
import { LayoutWrapper } from "../src/layout/layout.style";
import ProductCard from "../src/molecules/ProductCard";
import Header from "../src/organisms/Header";

export default function Store() {
    
    const [products] = useState([
        {
            img: "./product1.png",
            amount: 50,
            productname: "Cream Bag"
        },
        {
            img: "./product2.png",
            amount: 50,
            productname: "Grey Top"
        },
        {
            img: "./product3.png",
            amount: 50,
            productname: "Brown Top"
        },
        {
            img: "./product4.png",
            amount: 100,
            productname: "White shirt"
        },
    ])
    const [cart, setCart] = useState<any[]>([])

const number = cart.length


    function addToCart(product: any){
        setCart([...cart, product])
        console.log("was added");
    }
  return (
    <>
      <Header number={number} cart={cart} />
      <div>add to cart ({cart.length})</div>

      <FlexBox></FlexBox>
      <LayoutWrapper>
        <FlexBox justifyContent="center" gap="10px">
          
          {products.map((product, index) => (
            <ProductCard onClick={() => addToCart(product)} key={index} source={product.img} price={product.amount} name={product.productname}/>
          ))}
        </FlexBox>
      </LayoutWrapper>
    </>
  );
}
