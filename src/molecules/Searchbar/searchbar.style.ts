import styled from "styled-components";
import colors from "../../theme/colors";

export const SearchbarButton =  styled.button<{white?: boolean}>`
    width: 335px;
    height: 36px;
    padding-left: 15px;
    display: flex;
    
    
    align-items: center;
    background-color: ${({white}) => white ? colors?.white : colors?.gray};
    border-radius: 27px;
    border: none;
    input{
        border: none;
        background-color: transparent;
        padding-right: 10px;
        text-align: start;
    }
    .text-bold{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 26px;
        color: #1D1F22;
    }
    @media (max-width: 1080px){
        display: none;
    }


`
export const SearchbarButtonSmall =  styled.button<{white?: boolean}>`
    width: 320px;
    height: 40px;
    padding-left: 15px;
    display: flex;
    align-items: center;
    background-color: ${({white}) => white ? colors?.white : colors?.gray};
    border-radius: 27px;
    border: none;
    input{
        border: none;
        background-color: transparent;
        text-align: start;
        width: 270px;
        
    }
    .text-light{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 300;
        font-size: 14px;
        line-height: 26px;
        color: #A3A5AD;
    }


`