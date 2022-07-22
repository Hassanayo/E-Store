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
  const MemoValue = useMemo(
    () => ({cart,setCart}),
    [cart, setCart]
  );
  return MemoValue;
}
export type Context = ReturnType<typeof useCartContext>;
const CartContext = React.createContext<Context | undefined>(undefined);
CartContext.displayName = "Context";

export const CartContextProvider: React.FC = (props) => {
  const MemoValue = useCartContext();
  return <CartContext.Provider value={MemoValue} {...props} />;
};
export function useCart() {
  const cart = React.useContext(CartContext);
  if (cart === undefined) {
    throw new Error(`useCartContext must be used within a Provider`);
  }
  return cart;
}
