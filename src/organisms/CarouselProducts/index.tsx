import React from 'react'
import ProductCard from '../../molecules/ProductCard'
import Carousel from '../Carousel'
import { CarouselProductsContainer } from './products.style'

export default function CarouselProducts() {
  return (
    <CarouselProductsContainer>
        <p>Best Sellers</p>
        <Carousel show={4}>
          <ProductCard source="./product1.png" price={50.0} name="Cream bag" />
          <ProductCard source="./product2.png" price={50.0} name="Cream bag" />
          <ProductCard source="./product3.png" price={50.0} name="Cream bag" />
          <ProductCard source="./product4.png" price={50.0} name="Cream bag" />
          <ProductCard source="./product1.png" price={50.0} name="Cream bag" />
        </Carousel>


    </CarouselProductsContainer>
  )
}
