import styled from "styled-components";

export const ProductPageContainer = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 100px;
  .images-column {
  }
  .left-img {
    width: 590px;
  }
  .product-name {
    font-family: "Playfair Display";
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 48px;
    color: #1d1f22;
  }
  .product-price {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 34px;
    color: #1d1f22;
  }
  .reviews {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 14px;
    text-decoration-line: underline;
    color: #1d1f22;
  }
  .product-details {
    font-family: "Playfair Display";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 29px;
    color: #1d1f22;
    width: fit-content;
    padding-bottom: 64px;
  }
  .size-guide{
    font-family: 'Playfair Display';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 29px;
text-align: right;

/* MainTextColour/Primary */

color: #1D1F22;
  }
`;
