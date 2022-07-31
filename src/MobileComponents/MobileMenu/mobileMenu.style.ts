import styled from "styled-components";

export const MobileMenuContainer = styled.div`
    display: flex;
    height: 59px;
    width: 100%;
    position: fixed;
    bottom: 0;
    background-color: #FFFFFF;
    justify-content: space-around;
    align-items: center;
    .fab{
        position: relative;
        bottom: 20px;
    }
    .icon{
        fill: gray;
        :hover{
            fill: black;
        }
        

    }
`