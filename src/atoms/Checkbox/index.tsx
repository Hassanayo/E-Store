import React, { useState } from "react";
import { CheckboxContainer, RadioContainer } from "./checkbox.style";

export function CheckBox() {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <CheckboxContainer>
      <label>
        <input
          type="checkbox"
          onChange={() => {
            setIsChecked(!isChecked);
          }}
        />
        <svg
          className={`checkbox ${isChecked ? "checkbox--active" : ""}`}
          aria-hidden="true"
          viewBox="0 0 15 11"
          fill="none"
        >
          <path
            d="M1 4.5L5 9L14 1"
            strokeWidth="2"
            stroke={isChecked ? "#fff" : "none"}
          />
        </svg>
        
      </label>
    </CheckboxContainer>
  );
}
export function Radio({onClick} : {onClick?: () => void}) {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <RadioContainer>
      <label>
        <input
          type="checkbox"
          onChange={() => {
            setIsChecked(!isChecked);
          }}
          onClick={onClick}
        />
        <div className={`checkbox ${isChecked ? "checkbox--active" : ""}`}>
          <div className="dot"> 

          </div>

        </div>
      </label>
    </RadioContainer>
  );
}
