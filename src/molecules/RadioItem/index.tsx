import React, { useState } from "react";
import { FlexBox } from "../../atoms/Boxes";
import { Radio } from "../../atoms/Checkbox";
import Price from "../../atoms/Price";
import { RadioItemContainer } from "./radioItem.style";

export default function RadioItem({ title }: { title: string }) {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <RadioItemContainer>
      <FlexBox className={`white-box ${isClicked ? "gray-box" : ""}`}>
        <FlexBox alignItems="center" >
          <Radio
            onClick={() => {
              setIsClicked(!isClicked);
            }}
          />
        </FlexBox>
        <FlexBox flexDirection="column" className="box-content">
          <FlexBox alignItems="center" justifyContent="space-between">
            <p className="r-title">{title}</p>
            <Price price={20} />
          </FlexBox>
          <p className="r-details">Delivery from 4 to 6 business days</p>
        </FlexBox>
      </FlexBox>
    </RadioItemContainer>
  );
}
