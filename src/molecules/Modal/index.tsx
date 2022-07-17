import React, { useState } from "react";
import {
  AddToCartIcon,
  ClockIcon,
  Close,
  CoinsIcon,
  HeartIcon,
  PeopleIcon,
} from "../../assets/vectors";
import { FlexBox } from "../../atoms/Boxes";
import Button from "../../atoms/Buttons";
import colors from "../../theme/colors";
import { ModalContainer } from "./modal.style";

export default function Modal({ setIsOpen }: { setIsOpen: any }) {
  return (
    <ModalContainer>
      <FlexBox flexDirection="column" gap="30px">
        <FlexBox className="modal-btn" onClick={() => setIsOpen(false)}>
          <Close colour="gray" />
        </FlexBox>

        <FlexBox flexDirection="column" gap="10px">
          <p className="modal-head">Account Benefits</p>
          <p className="modal-head">Enjoy these perks with your free account</p>
        </FlexBox>
        <FlexBox flexDirection="column" gap="20px">
          <FlexBox gap="12px">
            <ClockIcon colour={colors.brandPrimary} />
            <p className="modal-details">Faster Checkout</p>
          </FlexBox>
          <FlexBox gap="12px">
            <PeopleIcon />
            <p className="modal-details">Full rewards program benefits</p>
          </FlexBox>
          <FlexBox gap="12px">
            <CoinsIcon />
            <p className="modal-details">Earn credits with every purchase</p>
          </FlexBox>
          <FlexBox gap="12px">
            <HeartIcon />
            <p className="modal-details">Manage your wishlist</p>
          </FlexBox>
        </FlexBox>
        <FlexBox>
          <Button width="254px" height="52px" onClick={() => setIsOpen(false)}>
            OK
          </Button>
        </FlexBox>
      </FlexBox>
    </ModalContainer>
  );
}
