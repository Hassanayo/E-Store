import React, { useState } from "react";
import { Close } from "../../assets/vectors";
import { FlexBox } from "../../atoms/Boxes";
import { useProduct } from "../../Context/ProductContext";
import CartItem from "../../molecules/CartItem";
import { CartContainer } from "./cart.style";

export default function ShoppingCart({ setCartOpen, cart, setCart }: any) {
  const Products = useProduct();

  function handleDelete(id: number) {
    setCart((prevCart: any[]) => {
      return prevCart.filter((CartItem: any, index: any) => {
        return index !== id;
      });
    });
  }

  return (
    <CartContainer>
      <div className="cart-content">
        <FlexBox flexDirection="column" gap="15px">
          <div className="close-cart" onClick={() => setCartOpen(false)}>
            <Close colour="black" />
          </div>
          <p>My Cart</p>
          <h4>Total Items</h4>
          {cart?.map(
            (
              product: { productname: string; price: number; img: string },
              index: number
            ) => (
              <CartItem
                onDelete={() => handleDelete(index)}
                id={index}
                key={index}
                name={product.productname}
                price={product.price}
                source={product.img}
              />
            )
          )}
        </FlexBox>
      </div>
    </CartContainer>
  );
}
