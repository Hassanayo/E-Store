import styled from "styled-components";

export const HeaderContainer = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  .nav-select {
    display: flex;
    font-family: "Roboto", sans-serif;
    gap: 40px;
    cursor: pointer;
    height: 100px;
  }
  .step-box {
    flex-direction: column;
    gap: 30px;
    justify-content: center;
    color: #bebfc4;
  }
  .step-text {
    color: #000;
    padding: 0 15px;
  }

  .search {
    margin-right: 50px;
  }
`;
