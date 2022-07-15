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
import Notifications from "../src/molecules/Notification";
import Notification from "../src/molecules/Notification";
import RadioItem from "../src/molecules/RadioItem";
import { Review1 } from "../src/molecules/Review";
import Scrollable from "../src/molecules/Scrollable";
import { Searchbar, SearchbarSmall } from "../src/molecules/Searchbar";
import colors from "../src/theme/colors";

export default function Molecules() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <FlexBox style={{ padding: "30px" }} flexDirection="column" gap="4px">
      <Alert colour="#0468DB" />
      <Alert colour="green" />
      <AddToCartDefault />
      <AddToCartBig />
      <AddToCartLow />
      <CallToAction />
      <Scrollable title="Color">
        <FlexBox gap="20px">
          <ColorBox colour={colors?.errorPrimary} />
          <p>Red</p>
        </FlexBox>
        <FlexBox gap="20px">
          <ColorBox colour="#DCA742" />
          <p>Red</p>
        </FlexBox>
        <FlexBox gap="20px">
          <ColorBox colour={colors?.black} />
          <p>Black</p>
        </FlexBox>
        <FlexBox gap="20px">
          <ColorBox colour="#004F97" />
          <p>Blue</p>
        </FlexBox>
        <FlexBox gap="20px">
          <ColorBox colour="Navy" />
          <p>Navy</p>
        </FlexBox>
        <FlexBox gap="20px">
          <ColorBox style={{border: "1px solid black"}} colour={colors?.white} />
          <p>White</p>
        </FlexBox>
        <FlexBox gap="20px">
          <ColorBox colour={colors?.black} />
          <p>Black</p>
        </FlexBox>
        <FlexBox gap="20px">
          <ColorBox colour="#004F97" />
          <p>Blue</p>
        </FlexBox>
        
      </Scrollable>
      <Divider />
      <Button width="100px" height="40px" onClick={() => setIsOpen(true)}>
        Open Modal
      </Button>
      {isOpen && <Modal setIsOpen={setIsOpen} />}

      <Searchbar />
      <SearchbarSmall />


      
      <Button variant="callToAction" width="100px" height="40px" onClick={() => setIsOpen(true)}>
        Show Notification
      </Button>
      {isOpen && <Notifications setIsOpen={setIsOpen} color={colors.notificationPrimary} />}



      
      <FlexBox>
      <Review1/>
      <Review1/>

      </FlexBox>
      <FlexBox  gap="40px">
      <RadioItem title="Delivery"/>
      <RadioItem title="Fedex Inpost"/>
      </FlexBox>
    </FlexBox>
  );
}
