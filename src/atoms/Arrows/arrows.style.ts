import styled from "styled-components";

export const ArrowLeftLong = styled.button`
  width: 60px;
  height: 30px;
  background-color: #ffffff;
  border: 0;
`;
export const ArrowRightLong = styled.button`
  height: 40px;
  width: 70px;
  background-color: ${({ theme }) => theme.colors?.mainPrimary};
  border: 0;
`;
export const ArrowLeft = styled.button`
  height: 44px;
  width: 44px;
  background-color: #f1f2f3;
  border: 0;
`;
export const ArrowRight = styled.button`
  height: 44px;
  width: 44px;
  background-color: ${({ theme }) => theme.colors?.mainPrimary};
  border: 0;
`;
