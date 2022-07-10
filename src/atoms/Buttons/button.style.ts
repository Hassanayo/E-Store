import styled, { css } from "styled-components";
import { ButtonProps } from "./i-button";
import responsive from "../../theme/responsive";

function variantButtonStyles({ variant }: ButtonProps) {
  switch (variant) {
    case "callToAction":
      return css`
        color: ${({ theme }) => theme.colors?.bgWhite};
        background-color: ${({ theme }) => theme.colors?.brandPrimary};
        border: 0;
        &:hover,
        &:active {
          color: ${({ theme }) => theme.colors?.bgWhite};
          background-color: ${({ theme }) => theme.colors?.brandPrimary};
          opacity: 0.8;
        }
      `;

    case "secondary":
      return css`
        color: ${({ theme }) => theme.colors?.bgWhite};
        background-color: ${({ theme }) => theme.colors?.bgGrey};
        
        border: 0;
        &:hover,
        &:active {
          color: ${({ theme }) => theme.colors?.bgWhite};
          background-color: ${({ theme }) => theme.colors?.bgGrey};
          opacity: 0.8;
        }
      `;

    default:
    case "primary":
      return css`
        color: ${({ theme }) => theme.colors?.bgWhite};
        background-color: ${({ theme }) => theme.colors?.mainPrimary};
        
        border: 0;
        &:hover,
        &:active {
          color: ${({ theme }) => theme.colors?.bgWhite};
          background-color: ${({ theme }) => theme.colors?.mainPrimary};
          opacity: 0.8;
        }
      `;
      break;
  }
}
export const ButtonComponent = styled.button<ButtonProps>`
  border: 0;
  cursor: pointer;
  box-sizing: border-box;
  font-family: "Playfair Display";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  width: ${({ size }) => (size === "regular" ? "139" : "117")}px;
  height: ${({ size }) => (size === "regular" ? "51" : "33")}px;
  color: #FFF;
  ${variantButtonStyles}
`;
