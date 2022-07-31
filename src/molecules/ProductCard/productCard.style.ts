import styled from "styled-components";

export const ProductcardContainer = styled.div`
  .product-box {
    max-width: 200px;
    margin: 0 auto;
    position: relative;
    :hover {
      box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
    }
  }
  .product-img {
    height: 250px;
    img{
      width: 100%;
      height: 100%;
    }
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
