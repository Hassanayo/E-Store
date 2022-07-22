import React, { useContext } from "react";
import { FlexBox } from "../../atoms/Boxes";
import Property from "../../atoms/Property";
import { useProduct } from "../../Context/ProductContext";
import Collection from "../../molecules/Collection";
import ProductCard from "../../molecules/ProductCard";
import { CatalogContainer } from "./catalog.style";

export default function Catalog({addToCart}: () => void) {
  const Products = useProduct()
  
  

  return (
    <CatalogContainer>
      <FlexBox flexDirection="column">
        <div className="categories">
          <p>Categories</p>
        </div>
        <div className="collection">
          <Collection />
        </div>
      </FlexBox>
      <FlexBox flexDirection="column" className="product-container">
        <div className="filter-options">
          <FlexBox gap="40px">
            <div>
              <p>Filters</p>
            </div>
            <div>
              <Property name="Sort by: " value="Price from high to low" />
            </div>
          </FlexBox>
          <FlexBox>
            <div>
              <Property name="Products found: " value="280" />
            </div>
            <div>View all</div>
          </FlexBox>
        </div>
        <div className="product-grid">
          {Products.map((product, index) => {
            return (
              <ProductCard click={() => addToCart(product)}  key={index} source={product.img} name={product.productname} price={product.amount} id={0}/>
            )
          })}
        </div>
      </FlexBox>
    </CatalogContainer>
  );
}
