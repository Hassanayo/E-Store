import styled from "styled-components";

export const ProductcardContainer = styled.div`
  .product-box {
    max-width: 200px;
    min-height: 384px;
    margin: 0 auto;
    position: relative;
    :hover {
      box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
    }
  }
  .product-img {
    height: 326px;
  }
  .card-fab {
    position: absolute;
    right: 20px;
    bottom: 15px;
  }
  .review {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 14px;
    text-decoration-line: underline;
    color: #000000;
  }
  .hit{
    position: absolute;
    top: 10px;
  }
`;
