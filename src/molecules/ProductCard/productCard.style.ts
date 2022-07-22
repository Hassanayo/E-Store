import styled from "styled-components";

export const ProductcardContainer = styled.div`
  .product-box {
    width: fit-content;
    margin: 0 auto;
    position: relative;
    :hover {
      box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
    }
  }
  .product-img {
    height: 326px;
    img {
      height: 100%;
    }
  }
  .card-fab{
    position: absolute;
    right: 20px;
    bottom: 15px;

  }
`;
