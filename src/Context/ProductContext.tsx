import React, { createContext, useContext } from 'react'
import { products } from '../db/product'
import data from '../db/db'


const ProductContext = createContext(data.products)

function ProductContextProvider({children}: {children: React.ReactNode}) {
  return (
    <ProductContext.Provider value={data.products}>{children}</ProductContext.Provider>
  )
}
export function useProduct(){
    const Products = useContext(ProductContext)
    return Products
}
