import React from "react";
import { AddedToCart, Close } from "../../assets/vectors";
import { FlexBox } from "../../atoms/Boxes";
import { NotificationContainer } from "./notification.style";

interface NotificationProps {
  color: string;
  setIsOpen: any;
}

export default function Notifications({ color, setIsOpen }: NotificationProps) {
  return (
    <NotificationContainer color={color}>
      <FlexBox className="n-btn" onClick={() => setIsOpen(false)}>
        <Close colour="white" />
      </FlexBox>
      <FlexBox alignItems="center" gap="20px">
        <FlexBox>
          <AddedToCart width="31.56px" height="29.7px" />
        </FlexBox>
        <FlexBox flexDirection="column">
          <p className="n-head">Added to cart</p>
          <p className="n-details">
            This is informative message for user{" "}
            <span className="n-span">View cart</span>
          </p>
        </FlexBox>
      </FlexBox>
    </NotificationContainer>
  );
}
