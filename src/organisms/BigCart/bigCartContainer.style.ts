import styled from "styled-components";

export const BigCartContainer = styled.div`
  max-height: 200vh;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 2px;
    height: 4px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #1d1f22;
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: gray;
  }
`;
export const BigCartBodyContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 650px){
    flex-direction: column;

  }
`
