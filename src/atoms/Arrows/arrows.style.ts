import styled from "styled-components";

export const ArrowLeftLong = styled.button`
  cursor: pointer;
  :focus {
    outline: none;
  }
  width: 60px;
  height: 30px;
  background-color: #ffffff;
  border: 0;
`;
export const ArrowRightLong = styled.button`
  cursor: pointer;
  :focus {
    outline: none;
  }
  height: 40px;
  width: 70px;
  background-color: ${({ theme }) => theme.colors?.mainPrimary};
  border: 0;
`;
export const ArrowLeft = styled.button`
  cursor: pointer;
  :focus {
    outline: none;
  }
  height: 44px;
  width: 44px;
  background-color: #f1f2f3;
  border: 0;
`;
export const ArrowRight = styled.button`
  cursor: pointer;
  :focus {
    outline: none;
  }
  height: 44px;
  width: 44px;
  background-color: ${({ theme }) => theme.colors?.mainPrimary};
  border: 0;
`;
