import styled from "styled-components";

export const ButtonContainer = styled.button`
    margin-top: 12px;
    width: 100%;
    padding: 20px;
    border-radius: 15px;
    background-color: rgba( 1, 1, 1, 0.8);
    color: #fff;
    text-transform: uppercase;
    cursor: pointer;
    transition: background-color 0.4s ease-in-out;

    &:hover {
        background-color: rgba(1, 206, 9, 0.5);
    }
`