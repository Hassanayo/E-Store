import { useRouter } from 'next/router'
import React from 'react'
import { Routes } from '../../constants/navigation'
import ProductCard from '../../molecules/ProductCard'
import Carousel from '../Carousel'
import { CarouselProductsContainer } from './products.style'

export default function CarouselProducts() {
  const router = useRouter()
  return (
    <CarouselProductsContainer>
        <p>Best Sellers</p>
        <Carousel show={4}>
          <ProductCard clickProduct={() => {router.push(Routes.store + 1)}} source="/product1.png" price={50.0} name="Cream bag" />
          <ProductCard source="/product2.png" price={50.0} name="Cream bag" />
          <ProductCard source="/product3.png" price={50.0} name="Cream bag" />
          <ProductCard source="/product4.png" price={50.0} name="Cream bag" />
          <ProductCard source="/product1.png" price={50.0} name="Cream bag" />
          <ProductCard source="/product4.png" price={50.0} name="Cream bag" />
        </Carousel>


    </CarouselProductsContainer>
  )
}
