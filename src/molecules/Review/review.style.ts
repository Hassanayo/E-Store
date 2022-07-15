import styled from "styled-components";

export const ReviewContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;

  .review-name {
    font-family: "Playfair Display";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    color: #3c3c3b;
  }
  .review-date {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 300;
    font-size: 10px;
    line-height: 152%;
    color: #3c3c3b;
  }
`;
