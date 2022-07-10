import styled from "styled-components";

export const InputComponent = styled.input`
    height: 37px;
    width: 317px;
    border: 0;
    border-bottom: 1px solid ${({theme}) => theme.colors?.contentPrimary};
    border-radius: 0px;
    width: 317px;
    height: 37px;
    font-family: 'Playfair Display';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 29px;

    /* Dark/Primary */

    color: #1D1F22;


`
export const InputContainer = styled.form`
    display: flex;
    flex-direction: column;
    .label{
        font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    font-size: 10px;
    line-height: 15px;
    color: #5ECE7B;

    }
`