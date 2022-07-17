import styled from "styled-components";

export const FlexBox = styled.div<{
  justifyContent?: string;
  alignItems?: string;
  gap?: string;
  flexDirection?: string;
}>`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  gap: ${({ gap }) => gap};
  flex-direction: ${({ flexDirection }) => flexDirection};
`;
export const Divider = styled.hr`
  margin: 0;
  opacity: 0.6;
  border: 0.6px solid #888a8e;
  width: 100%;
`;
export const ColorBox = styled.div<{ colour: string }>`
  width: 20px;
  height: 20px;
  border: none;
  background-color: ${({ colour }) => colour};
`;
