import styled from "styled-components";

export const CartContainer = styled.div`
  width: 100vw;
  background: rgba(0, 0, 0, 0.2);
  box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
  position: absolute;
  height: 100vh;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  .cart-content {
    
    background-color: #FFF;
    position: fixed;
    top: 50%;
    left: 85%;
    transform: translate(-50%, -50%);
    z-index: 11;
    
    /* height: 100%;
    max-height: 100%;
    overflow: auto;
    padding: 40px;
    background: white;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 10;
    box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19); */ 
  }
  .sidebar{
    width: 402px;
    height: 100vh;
    
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    
    padding: 40px;
  }
  .cart-items{
    height: 60vh;
    max-height: 100%;
    overflow: auto;
    padding: 10px;
    ::-webkit-scrollbar {
      width: 4px;
      height: 20px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px grey;
      border-radius: 10px;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #1d1f22;
      border-radius: 10px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: gray;
    }
  }
  .total {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    color: #bebfc4;
  }
  .price {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 34px;
    color: #1d1f22;
  }
`;
