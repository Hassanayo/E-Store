import styled from "styled-components";

export const CallToActionContainer = styled.div`
  width: 100%;
  height: 202px;
  color: #ffffff;
  background-color: #313131;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 150px;
  opacity: 0.8;
  .big-text {
    font-family: "Playfair Display";
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 48px;
    color: #ffffff;
  }
  .small-text {
    font-family: "Playfair Display";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 29px;
  }
  @media screen and (max-width: 768px) {
    .big-text {
      font-weight: 400;
      font-size: 16px;
      line-height: 21px;
      text-align: center;
    }
    .small-text {
      display: none;
    }
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
`;
