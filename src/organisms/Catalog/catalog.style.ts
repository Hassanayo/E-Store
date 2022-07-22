import styled from "styled-components";

export const CatalogContainer = styled.div`
  border-top: 1px solid #f1f2f4;
  display: flex;
  .categories {
    padding: 28px 40px;
    font-family: "Playfair Display";
    font-style: normal;
    font-weight: 900;
    font-size: 18px;
    line-height: 213.28%;
    color: #1d1f22;
    border: 1px solid #f1f2f4;
    border-left: 0;
  }
  .product-container{
    width: 100%;
  }
  .filter-options{
    display: flex;
    padding: 37px 60px;
    width: 100%;
    justify-content: space-between;
    border: 1px solid #f1f2f4;
    border-right: 0;
  }
  .product-grid{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 36px;
  }
  @media screen and (max-width: 1180px) {
    .product-grid{
        grid-template-columns: repeat(2, 1fr);
    }
    
  }
`;
