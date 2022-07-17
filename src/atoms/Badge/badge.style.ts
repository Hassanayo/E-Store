import styled from "styled-components";

export const BrandBox = styled.div<{ color?: string }>`
  height: 28px;
  width: 58px;
  border: 0;
  background-color: ${({ color, theme }) =>
    color ? theme.colors?.errorPrimary : theme.colors?.brandPrimary};
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
`;
