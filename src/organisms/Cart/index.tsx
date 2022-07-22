import React, { useContext, useState } from "react";
import { CartContextType } from "../../@types/cart";
import { Close } from "../../assets/vectors";
import { FlexBox } from "../../atoms/Boxes";
import { useCart } from "../../Context/CartContext";
import { useProduct } from "../../Context/ProductContext";
import CartItem from "../../molecules/CartItem";
import { CartContainer } from "./cart.style";

export default function ShoppingCart({ setCartOpen }: any) {
  const {cart, setCart} = useCart()

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
          {cart.map((product, index) => {
            return (
              <CartItem onDelete={() => handleDelete(index)} id={index} name={product.productname} key={index} source={product.img} price={product.amount}/>
            )
          })}
        </FlexBox>
      </div>
    </CartContainer>
  );
}
