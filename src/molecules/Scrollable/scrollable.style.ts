import styled from "styled-components";

export const ScrollableContainer = styled.div`
  display: flex;
  flex-direction: column;
  .view-all{
    text-decoration: underline;
    cursor: pointer;
  }
  .scroll-title{
    font-family: 'Playfair Display';
    font-style: normal;
    font-weight: 900;
    font-size: 18px;
    line-height: 213.28%;
    color: #1D1F22;

  }

  .scroll {
    height: 200px;
    width: 226px;
    /* width */
    ::-webkit-scrollbar {
      width: 4px;
      height: 20px;
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

    overflow: auto;
  }
`;
