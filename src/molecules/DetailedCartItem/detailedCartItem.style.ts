import styled from "styled-components";

export const DetailedCartItemContainer = styled.div`
  display: flex;
  gap: 60px;
  border-top: 1 px solid #f1f2f3;
  border-bottom: 1px solid #f1f2f3;
  padding: 40px 20px;
  position: relative;
  max-height: 280px;
  
  .ship-details {
    max-width: 279px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 300;
    font-size: 10px;
    line-height: 152%;
    color: #1d1f22;
    padding: 10px;
    background-color: #f1f2f3;
  }
  .img-box {
    width: 140px;
    height: 200px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .detailed-container {
    display: flex;
    gap: 15px;
  }
  .product-name {
    font-family: "Playfair Display";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    color: #1d1f22;
  }
  .price {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.02em;
    color: #1d1f22;
  }
  .cart-detail {
    font-family: "Playfair Display";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: #1d1f22;
    padding-bottom: 10px;
    text-decoration: underline;
    cursor: pointer;
  }
  .property-box {
    p {
      display: inline;
      font-family: "Playfair Display";
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
      color: #1d1f22;
    }
    span {
      font-family: "Playfair Display";
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
      color: black;
    }
  }
  .text-container {
    p {
      font-family: "Playfair Display";
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 19px;
      text-decoration-line: underline;
      color: #1d1f22;
      text-decoration: underline;
      padding-bottom: 20px;
    }
  }
  @media screen and (max-width: 650px) {
   .text-container{
    display: none;
   } 
  }
  
`;
