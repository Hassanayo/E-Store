import React, { createContext, useContext } from 'react'
import { products } from '../db/product'

const ProductContext = createContext(products)

function ProductContextProvider({children}: {children: React.ReactNode}) {
  return (
    <ProductContext.Provider value={products}>{children}</ProductContext.Provider>
  )
}
export function useProduct(){
    const Products = useContext(ProductContext)
    return Products
}
