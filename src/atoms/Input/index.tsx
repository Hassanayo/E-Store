import React from "react";
import { InputComponent, InputContainer } from "./input.style";
interface InputProps {
  children?: React.ReactNode;
  placeholder?: string;
}

export default function Input({ children, placeholder }: InputProps) {
  return (
    <InputContainer action="">
      <label className="label">{children}</label>
      <InputComponent required placeholder={placeholder} />
    </InputContainer>
  );
}
