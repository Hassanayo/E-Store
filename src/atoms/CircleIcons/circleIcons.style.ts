import React from "react";
import styled from "styled-components";

export interface FABProps {
  size?: "66px" | "46px" | "26px";
  shadow?: boolean;
  children?: React.ReactNode;
  black?: boolean;
  hover?: boolean;
  colour?: string;
}

export const FAB = styled.button<FABProps>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  box-shadow: ${({ shadow }) =>
    shadow ? "0px 4px 6px rgba(66, 66, 66, 0.2)" : ""};
  background-color: ${({ colour }) => colour};
  border-radius: 50%;
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;

  color: #ffffff;

  &:hover {
    border: 5px solid #cff0d8;
  }
`;