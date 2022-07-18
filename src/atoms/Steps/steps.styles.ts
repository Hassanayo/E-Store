import styled from "styled-components";

export const StepsContainer = styled.div`
  display: flex;
  font-family: "Roboto", sans-serif;
  gap: 40px;
  cursor: pointer;
  height: 100px;
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
  .active {
    color: #1d1f22;
    border-bottom: 3px solid #1d1f22;
    width: 100%;
    border-radius: 1px;
    p {
      color: #1d1f22;
    }
  }
`;
