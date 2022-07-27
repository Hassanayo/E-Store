/* eslint-disable react-hooks/exhaustive-deps */
// cartContext.tsx
import React, { useContext, useMemo, useState } from "react";

function useCartContext() {
  const [cart, setCart] = useState<
    {
      img: string;
      amount: number;
      productname: string;
    }[]
  >([]);
  function addToCart(product: any) {
    setCart([...cart, product]);
  }
  function handleDelete(id: number) {
    setCart((prevCart: any[]) => {
      return prevCart.filter((CartItem: any, index: any) => {
        return index !== id;
      });
    });
  }
  const MemoValue = useMemo(
    () => ({ cart, setCart, addToCart, handleDelete }),
    [cart, setCart, addToCart, handleDelete]
  );
  return MemoValue;
}
export type Context = ReturnType<typeof useCartContext>;
const CartContext = React.createContext<Context | undefined>(undefined);
CartContext.displayName = "Context";

export const CartContextProvider: React.FC = (props: any) => {
  const MemoValue = useCartContext();
  return (
    <CartContext.Provider value={MemoValue}>
      {props.children}
    </CartContext.Provider>
  );
};
export function useCart() {
  const cart = React.useContext(CartContext);
  if (cart === undefined) {
    throw new Error(`useCartContext must be used within a Provider`);
  }
  return cart;
}
