import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, 1fr);
  gap: 40px;
  div {
    width: 100%;
    min-height: 300px;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .two-rows {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 10px;
  }
  .two-col {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 10px;
    grid-row-gap: 10px;
  }
`;
export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  .two-col {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;
