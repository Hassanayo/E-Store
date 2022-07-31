import React, { useState } from "react";
import { ChevronDown, ChevronRight } from "../../assets/vectors";
import { FlexBox } from "../Boxes";
import { CustomSelectContainer } from "./customSelect.style";
interface customSelectProps{
    content: string
    title: string
}

export default function CustomSelect({content, title}: customSelectProps) {
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
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
