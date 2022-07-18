import styled from "styled-components";

export const MenuContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: 10;
  top: 100px;
  left: 0;

  .menu-content {
    display: flex;
    justify-content: center;
    padding: 40px 80px;
    border-top: 1px solid #f1f2f4;
    background-color: #ffffff;
  }
  .menu-box {
    padding: 25px;
    h5 {
      font-family: "Playfair Display";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 19px;
      color: #1d1f22;
      padding-bottom: 20px;
    }
    p {
      font-family: "Playfair Display";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 240%;
      color: #1d1f22;
    }
  }
  .img-box {
    width: 252px;
    img {
      width: 100%;
    }
  }
`;
