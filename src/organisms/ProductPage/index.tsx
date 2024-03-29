/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import { ProductPageContainer } from "./productPage.style";
import { FlexBox } from "../../atoms/Boxes";
import { StarratingSmall } from "../../assets/vectors";
import { Select } from "../../molecules/Select";
import { AddToCartBig, AddToCartDefault } from "../../molecules/AddToCart";
import ProductTab from "../ProductTab";
import { useCart } from "../../Context/CartContext";
import { useProduct } from "../../Context/ProductContext";
import { useViewport } from "../../Context/viewportContext";

export default function ProductPage({ products }: any) {
  const { addToCart } = useCart();
  const {isMobile} = useViewport()
  // const router = useRouter();
  // const route = router.asPath;
  // const routed = route.replace(/\/+$/, "");
  // const lastItem = parseInt(routed.substring(routed.lastIndexOf("/") + 1));

  return (
    <>
      <ProductPageContainer key={products.id}>
        <div className="images-column">
          <div className="left-img">
            <img src={products.img} alt="" />
          </div>
          {/* <div className="left-img">
            <Image
              src={products.img}
              alt="p-img"
              layout="responsive"
              width={100}
              height={100}
            />
          </div> */}
        </div>
        <FlexBox className="details-column" flexDirection="column">
          <div>
            <p className="product-name">{products.productname}</p>
            <FlexBox justifyContent="space-between">
              <p className="product-price">${products.amount}</p>
              <FlexBox alignItems="end" gap="10px">
                <StarratingSmall />
                <p className="reviews">Read all reviews</p>
              </FlexBox>
            </FlexBox>
            <div className="product-details">
              Find stunning women cocktail and party dresses. Stand out in lace
              and metallic cocktail dresses and party dresses from all your
              favorite brands.
            </div>
          </div>
          <FlexBox
            className="select-container"
            flexDirection="column"
            alignItems="flex-end"
          >
            <p className="size-guide">Size guide</p>
            <FlexBox
              flexDirection="column"
              gap="10px"
              style={{ paddingBottom: "20px" }}
            >
              <div className="select-box">
              <Select>
                <option value="" disabled defaultValue={""} hidden>
                  Size
                </option>
                <option value="xs">XS</option>
                <option value="md">MD</option>
                <option value="lg">LG</option>
              </Select>
              <Select>
                <option value="" disabled defaultValue={""} hidden>
                  Lightgrey
                </option>
                <option value="xs">Blue</option>
                <option value="md">Red</option>
                <option value="lg">Green</option>
              </Select>

              </div>
            </FlexBox>
            <div style={{ paddingBottom: "20px" }}>
              {isMobile ? <AddToCartDefault /> : <AddToCartBig click={() => addToCart(products)} />}
              
            </div>
            <FlexBox flexDirection="column" alignItems="flex-end" gap="20px">
              <p className="reviews">Save for later</p>
              <p className="reviews">Add to compare</p>
            </FlexBox>
          </FlexBox>
          <ProductTab />
        </FlexBox>
      </ProductPageContainer>
      ;
    </>
  );
}
