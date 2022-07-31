import React, { useState } from "react";
import { ChevronDown, ChevronRight } from "../../assets/vectors";
import { FlexBox } from "../Boxes";
import { CustomSelectContainer } from "./customSelect.style";

export default function CustomSelect({content, title}: string) {
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);

  const optionsList = [
    "ABOUT US",
    "DEPARMENTS",
    "HELP",
    "PAYMENTS & DELIVERY",
    "SOCIAL",
  ];

  function toggleOptions() {
    setIsOptionsOpen(!isOptionsOpen);
  }

  return (
    <CustomSelectContainer>
      <div className="container">
        
        <div  className="footer-btn" onClick={toggleOptions}>
          <p>{title}</p>
          {isOptionsOpen ? <ChevronDown/> : <ChevronRight/>}
        </div>
        <p className={`options ${isOptionsOpen ? "show" : ""}`}>
          {content}
        </p>
      </div>
    </CustomSelectContainer>
  );
}
