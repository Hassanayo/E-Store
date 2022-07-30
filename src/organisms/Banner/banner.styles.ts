import styled from "styled-components";
import responsive, { sizes } from "../../theme/responsive";

export const BannerContainer = styled.div`
  padding-bottom: 100px;
  .banner-header {
    font-family: "Playfair Display";
    font-style: normal;
    font-weight: 400;
    line-height: 77px;
    color: #1d1f22;
    padding-bottom: 40px;
    font-size: 2.5em
  }
  .banner-title {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    letter-spacing: 0.02em;
    color: #737680;
    padding-bottom: 15px;
  }
  .banner-details {
    font-family: "Playfair Display";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    max-width: 70%;
    color: #1d1f22;
    padding: 0 0px 20px 0;
  }
  .banner-box {
    padding: 60px 80px 0 80px;
    background-image: url("/long-banner.png");
    background-position: center ;
    
    
    
  }
  .two-col {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 10px;
    grid-row-gap: 0px;
    margin: 0 auto;
  }
  .title-box{
    padding-bottom: 50px;
  }
  .b2-title {
    font-family: "Playfair Display";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 32px;
    text-align: center;
    color: #1d1f22;
  }
  .hashtag {
    font-family: "Playfair Display";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 29px;
    text-align: center;
    color: #000000;
  }
  .yl-box{
    max-width: 470px;
    img{
      width: 100%;
    }
  }
  @media (max-width: ${sizes.$mobile}){
    .banner-box {
    padding: 50px 0 0 20px;
    background-image: url("/long-banner.png");
    background-position: center;
    
  }
  

  }
`;
