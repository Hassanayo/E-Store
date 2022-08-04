import styled from "styled-components";

export const ProductTabContainer = styled.div`
  .tab-box {
    font-family: "Playfair Display";
    font-style: normal;
    font-weight: 900;
    font-size: 18px;
    line-height: 213.28%;
    color: #000000;
    padding-bottom: 20px;
    cursor: pointer;
  }
  @media screen and (max-width: 650px) {
    margin-top: 32px;
    .tab-head{
      font-size: 15px;
      text-align: center;
    }
  }
`;
