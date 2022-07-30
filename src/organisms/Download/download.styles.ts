import styled from "styled-components";

export const DownloadSectionContainer = styled.section`
  background-image: url("./download-bg.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 40px 0 130px 130px;
  height: 100%;
  .d-title {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.02em;
    color: #a3a5ad;
    padding-bottom: 20px;
  }
  .d-details {
    font-family: "Playfair Display";
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    color: #1d1f22;
    padding-bottom: 40px;
  }
  @media screen and (max-width: 650px) {
    padding: 40px 0 130px 0px;
    text-align: center;
    .d-details{
    font-size: 1.5em;
  }
  .img-box{
    max-width: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 0 auto;
  }
  }
  
`;
