import styled from "styled-components";

export const NotificationContainer = styled.div<{ color?: string }>`
  position: fixed;
  top: 90%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({ color }) => color};
  box-shadow: 0px 8px 11px rgba(0, 0, 0, 0.1);
  padding: 10px 100px 9px 20.44px;
  z-index: 99;
  .n-btn {
    position: absolute;
    right: 10px;
    top: 10px;
    cursor: pointer;
    :hover {
      transform: scale(1.4);
    }
  }

  .n-head {
    font-family: "Playfair Display";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 222.88%;
    color: #ffffff;
  }
  .n-details {
    font-family: "Playfair Display";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 222.88%;

    color: #ffffff;
  }
  .n-span {
    padding-left: 20px;
    text-decoration: underline;
  }
`;
