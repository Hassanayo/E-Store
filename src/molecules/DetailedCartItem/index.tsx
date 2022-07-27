/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Close } from "../../assets/vectors";
import { FlexBox } from "../../atoms/Boxes";
import Property from "../../atoms/Property";
import { CartProps } from "../CartItem";
import { DetailedCartItemContainer } from "./detailedCartItem.style";

export default function DetailedCartItem({source, price, name, onDelete, id} : CartProps) {
  return (
    <DetailedCartItemContainer>
      <div> 
        <div className="detailed-container">
          <div className="img-box">
            <img src={source} alt="" />
          </div>

          <FlexBox
            className="details-box"
            flexDirection="column"
            justifyContent="space-between"
          >
            <div>
              <p className="product-name">{name}</p>
              <p className="price">$ {price}</p>
              <div className="property-box">
                <Property name="Size: " value="XS" />
              </div>
            </div>
            <div className="ship-details">
                <p>Usually arrives in 5-13 business days. A shipping timeline specific to your destination can be viewed in Checkout.</p>
            </div>
          </FlexBox>
        </div>
      </div>
      <div className="text-container">
        <p>Edit</p>
        <p>Save for later</p>
        <p>Add to compare</p>
        <p>Add message or gift wrap</p>
      </div>
      <FlexBox onClick={onDelete} style={{cursor: "pointer"}} alignItems="center">
        <Close  colour="black"/>
      </FlexBox>
    </DetailedCartItemContainer>
  );
}

