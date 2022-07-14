import styled from "styled-components";
import colors from "../../theme/colors";

export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 38px 80px;
  background-color: #FFFFFF;
  width: 420px;
  box-shadow: 0px 8px 11px rgba(0, 0, 0, 0.1);
  z-index: 99;
  .modal-btn{
    position: absolute;
    right: 20px;
    top: 20px;
    cursor: pointer;
    :hover{
        transform: scale(1.4);
    }
  }

  .modal-head {
    font-family: "Playfair Display";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    color: #1d1f22;
  }
  .modal-details {
    font-family: "Playfair Display";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: #1d1f22;
  }
`;
