import styled from "styled-components";

export const ColorBoxContainer = styled.div<{color?: string}>`
    width: 28px;
    height: 28px;
    background-color: ${({color}) => color};
`