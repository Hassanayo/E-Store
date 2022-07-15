import React from "react";
import { FlexBox } from "../../atoms/Boxes";
import Button from "../../atoms/Buttons";
import { Selectbox, SelectboxMobile } from "../../atoms/Input/input.style";
import colors from "../../theme/colors";
import Alert from "../Alert";
import { AddToCartContainer } from "./addToCart.style";


export function AddToCartDefault() {
  return (
    <FlexBox gap="11px">
      <Button variant="callToAction" width="251px" height="54px">
        ADD TO CART
      </Button>
      <SelectboxMobile>
        <option value="">1</option>
        <option value="">1</option>
        <option value="">1</option>
      </SelectboxMobile>
    </FlexBox>
  );
}
export function AddToCartBig() {
  return (
    <FlexBox>
      <Selectbox>
        <option value="">1</option>
        <option value="">1</option>
        <option value="">1</option>
      </Selectbox>
      <Button variant="callToAction" width="418px" height="52px">
        ADD TO CART
      </Button>
    </FlexBox>
  );
}
export function AddToCartLow() {
  return (
    <AddToCartContainer>

    <FlexBox flexDirection="column" gap="14px" className="add-card" >
      <Alert colour={colors.errorPrimary} />
      <FlexBox>
      <Selectbox>
        <option value="">1</option>
        <option value="">1</option>
        <option value="">1</option>
      </Selectbox>
      <Button variant="callToAction" width="418px" height="52px">
        ADD TO CART
      </Button>
      </FlexBox>
      <FlexBox flexDirection="column" gap="20px">
        <p className="text">Save for later</p>
        <p className="text">Add to compare</p>
      </FlexBox>
    </FlexBox>
    </AddToCartContainer>
  );
}
export function AddToCartAval() {
  return (
    <AddToCartContainer>

    <FlexBox flexDirection="column" gap="14px" className="add-card" >
      <FlexBox>
      <Selectbox>
        <option value="">1</option>
        <option value="">1</option>
        <option value="">1</option>
      </Selectbox>
      <Button variant="callToAction" width="418px" height="52px">
        ADD TO CART
      </Button>
      </FlexBox>
      <FlexBox flexDirection="column" gap="20px">
        <p className="text">Save for later</p>
        <p className="text">Add to compare</p>
      </FlexBox>
    </FlexBox>
    </AddToCartContainer>
  );
}
