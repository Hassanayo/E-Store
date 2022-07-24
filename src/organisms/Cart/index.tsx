import React, { useContext, useState } from "react";
import { Close } from "../../assets/vectors";
import { FlexBox } from "../../atoms/Boxes";
import Button from "../../atoms/Buttons";
import { useCart } from "../../Context/CartContext";
import CartItem from "../../molecules/CartItem";
import { CartContainer } from "./cart.style";

export default function ShoppingCart({ setCartOpen }: any) {
  const [isOpen, setIsOpen] = useState(false)
  const { cart, setCart } = useCart();
  let sum = 0;

  function handleDelete(id: number) {
    setCart((prevCart: any[]) => {
      return prevCart.filter((CartItem: any, index: any) => {
        return index !== id;
      });
    });
  }

  cart.forEach((i) => {
    return (sum += i.amount);
  });
  console.log(sum);

  return (
    <CartContainer >
      <div className="cart-content">
        <div className="sidebar">
          <FlexBox flexDirection="column" gap="15px">
            <div className="close-cart" onClick={() => setCartOpen(false)}>
              <Close colour="black" />
            </div>
            <p>My Cart</p>
            <h4>Total Items</h4>
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
          <Button height="52px">Checkout</Button>
        </div>
      </div>
    </CartContainer>
  );
}
