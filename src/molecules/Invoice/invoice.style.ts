import styled from "styled-components";
import { theme } from "../../theme";

export const InvoiceContainer = styled.div`
  background-color: ${theme.colors?.gray};
  padding: 60px 80px;
  max-height: 100vh;
  .i-heading {
    font-family: "Playfair Display";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 32px;
    color: #1d1f22;
    padding-bottom: 60px;
  }
  .total-details {
    padding-bottom: 80px;
    div {
      display: flex;
      gap: 60px;
    }
  }
  .property {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 34px;
    color: #a3a5ad;
  }
  .value {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 34px;
    color: #1d1f22;
  }
  .total-p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 25px;
    padding-bottom: 20px;
    color: #1d1f22;
  }
  .sendtomail {
    font-family: "Playfair Display";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    color: #1d1f22;
    padding: 20px 0 20px;
  }
  .help-info {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 300;
    font-size: 10px;
    line-height: 152%;
    color: #1d1f22;
    li{
        padding-left: 10px;
    }
  }
`;
