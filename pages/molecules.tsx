import React, { useState } from "react";
import { ColorBox, Divider, FlexBox } from "../src/atoms/Boxes";
import Button from "../src/atoms/Buttons";
import {
  AddToCartBig,
  AddToCartDefault,
  AddToCartLow,
} from "../src/molecules/AddToCart";
import Alert from "../src/molecules/Alert";
import CallToAction from "../src/molecules/CallToAction";
import Modal from "../src/molecules/Modal";
import Scrollable from "../src/molecules/Scrollable";
import colors from "../src/theme/colors";

export default function Molecules() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <FlexBox style={{ padding: "30px" }} flexDirection="column" gap="4px">
      <Alert colour="#0468DB" />
      <Alert colour="green" />
      <AddToCartDefault />
      <AddToCartBig />
      <AddToCartLow />
      <CallToAction />
      <Scrollable title="color">
        <FlexBox gap="20px">
        <ColorBox colour={colors?.errorPrimary} />
        <p>Red</p>
        </FlexBox>
        <FlexBox><ColorBox colour={colors?.errorPrimary} /></FlexBox>
        <FlexBox><ColorBox colour={colors?.errorPrimary} /></FlexBox>
        <FlexBox><ColorBox colour={colors?.errorPrimary} /></FlexBox>
        <FlexBox><ColorBox colour={colors?.errorPrimary} /></FlexBox>
        <FlexBox><ColorBox colour={colors?.errorPrimary} /></FlexBox>
        <FlexBox><ColorBox colour={colors?.errorPrimary} /></FlexBox>
        <FlexBox><ColorBox colour={colors?.errorPrimary} /></FlexBox>
        <FlexBox><ColorBox colour={colors?.errorPrimary} /></FlexBox>
        <FlexBox><ColorBox colour={colors?.errorPrimary} /></FlexBox>
      </Scrollable>
      <Divider/>
      <Button width="100px" height="40px" onClick={() => setIsOpen(true)}>Open Modal</Button>
      {isOpen && <Modal setIsOpen={setIsOpen}/>}
    </FlexBox>
  );
}
