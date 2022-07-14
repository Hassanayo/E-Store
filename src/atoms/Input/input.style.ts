import styled from "styled-components";
export const InputContainer = styled.form`
  display: flex;
  flex-direction: column;
  .label {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 300;
    font-size: 10px;
    line-height: 15px;
    color: #5ece7b;
  }
`;

export const InputComponent = styled.input<{ bold?: string }>`
  height: 37px;
  width: 317px;
  border: 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors?.contentPrimary};
  border-radius: 0px;
  width: 317px;
  height: 37px;
  font-family: "Playfair Display";
  font-style: normal;
  font-weight: ${({ bold }) => (bold ? "900" : "400")};
  font-size: 18px;
  line-height: 29px;
  color: #1d1f22;
`;
export const SelectBig = styled.select`
  width: 509px;
  height: 52px;
  padding: 13px 0 15px 30px;
  background-color: ${({ theme }) => theme.colors?.gray};
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Playfair Display';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: #1D1F22;


`
export const Selectbox = styled.select`
  height: 52px;
  width: 91px;
  padding: 11px 19px 11px 19px;
  background-color: ${({ theme }) => theme.colors?.gray};
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 28px;
`;
export const SelectboxMobile = styled.select`
  height: 52px;
  width: 73px;
  padding: 11px 19px 11px 19px;
  background-color: ${({ theme }) => theme.colors?.white};
  border: 1px solid #F1F2F3;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 28px;
`;
