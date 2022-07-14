import styled from "styled-components";
import { theme } from "../../theme";

export const CheckboxContainer = styled.div`
  label {
    display: flex;
    align-items: center;
  }
  input[type="checkbox"] {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    margin-right: 4px;
    width: 1px;
  }
  .checkbox {
    display: inline-block;
    height: 20px;
    width: 20px;
    margin-right: 14px;
    background: #fff;
    border: 1px solid #bebfc4;
    cursor: pointer;
  }
  .checkbox--active {
    border-color: ${({ theme }) => theme.colors?.brandPrimary};
    background: ${({ theme }) => theme.colors?.brandPrimary};
  }
`;
