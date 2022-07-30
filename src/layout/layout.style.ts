import styled from "styled-components";
import { sizes } from "../theme/responsive";

export const LayoutWrapper = styled.div`
  max-width: 1440px;
  background-color: white;
  padding: 0 72px;
  margin: 0 auto;
  @media screen and (max-width: 880px) {
    padding: 0 0;
  }
  
`;
export const LayoutStore = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  @media screen and (max-width: 1080px) {
    padding: 0 0;
  }
`
