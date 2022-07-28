import React, { useContext, useState } from "react";
import { Close } from "../../assets/vectors";
import { FlexBox } from "../../atoms/Boxes";
import Button from "../../atoms/Buttons";
import { useCart } from "../../context/CartContext";
import CartItem from "../../molecules/CartItem";
import { CartContainer } from "./cart.style";
import axios from "../../db/instance";
import CircleIcons from "../../atoms/CircleIcons";
import colors from "../../theme/colors";
import { useRouter } from "next/router";
import { Routes } from "../../constants/navigation";

export default function ShoppingCart({ setCartOpen }: any) {
  const { cart, handleDelete } = useCart();
  const router = useRouter()
  let sum = 0;

  

  cart.forEach((i) => {
    return (sum += i.amount);
  });

  // send purchase to backend
  
  function handlePurchase() {
    const order = cart;
    axios.post("/orders.json", order)
      .then((res: any) => console.log(res))
      .catch((err: any) => console.log(err));
  }

  return (
    <CartContainer>
      <div className="cart-content">
        <div className="sidebar">
          <FlexBox flexDirection="column" gap="15px">
            <div className="close-cart" onClick={() => setCartOpen(false)}>
              <Close colour="black" />
            </div>
            <p>My Cart</p>
            
            <FlexBox alignItems="center" gap="10px" className="total-items">
              <CircleIcons size="46px" colour={colors.brandPrimary}>{cart.length}</CircleIcons>
              <h4>Total Items</h4>
            </FlexBox>
            <div className="cart-items">
              {cart.map((product, index) => {
                return (
                  <CartItem
                    onDelete={() => handleDelete(index)}
                    id={index}
                    name={product.productname}
                    key={index}
                    source={product.img}
                    price={product.amount}
                  />
                );
              })}
            </div>
          </FlexBox>
          <FlexBox justifyContent="space-between">
            <p className="total">Total</p>
            <p className="price">${sum}</p>
          </FlexBox>
          <Button onClick={() => router.push(Routes.detailedCart)} height="54px">
            Checkout
          </Button>
        </div>
      </div>
    </CartContainer>
  );
}
