import styled from "styled-components";

export const CartItemContainer = styled.div`
  display: flex;
  background: #ffffff;
  box-shadow: 5px 1px 35px rgba(168, 172, 176, 0.19);
  padding: 10px;
  position: relative;
  .fab{
    position: absolute;
    right: -10px;
    top: 0;
    
  }
  .img-box {
    width: 140px;
    height: 200px;
    img {
      width: 100%;
      height: 100%;
    }
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
  .details-box {
    padding-left: 19px;
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
      color: #a3a5ad;
    }
  }
`;
