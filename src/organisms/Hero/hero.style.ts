import styled from "styled-components";
import responsive from "../../theme/responsive";
export const HeroContainer = styled.section`
  background-image: url("/HeroImage.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  min-height: 584px;
  margin-bottom: 100px;
  position: relative;
  .hero-minitext {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 17px;
    color: #bebfc4;
    width: 72px;
  }
  .hero-line {
    height: 45px;
    width: 1px;
    border-radius: 0px;
    background: #bebfc4;
  }
  .hero-content {
    padding: 80px 0 150px 100px;
    ${responsive("$mobile")`
    padding: 80px 20px;
    
  `}
  }
  .hero-header {
    font-family: "Playfair Display";
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 48px;
    color: #1d1f22;
    max-width: 500px;
    padding: 80px 0 60px 0;
    ${responsive("$mobile")`
    padding: 80px 0;
    font-style: normal;
    font-size: 25px;
    line-height: 27px;
    color: #1D1F22;

    
  `}
  }
  .hero-btn {
    padding-left: 50px;
    ${responsive("$mobile")`
    padding: 0px;
    
  `}
  }
`;
