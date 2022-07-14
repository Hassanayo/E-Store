import styled from "styled-components";


export const PriceContainer = styled.p<{colour?: string}>`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: 0.02em;
  color: ${({colour}) => colour};
  span {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.02em;
    text-decoration-line: line-through;
    color: #a3a5ad;
  }
`;
