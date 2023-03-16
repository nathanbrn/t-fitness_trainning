import styled from "styled-components";

export const BodyContainer = styled.div`
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
`

export const MainContainer = styled.main`
    height: 90vh;
    margin-top: 0;
    background-color: rgba(0, 0, 0, 0.7) ;
    display: flex;
    flex-direction: column;
    min-height: 20vh;
    text-align: center;
    align-items: center;
    gap: 10px;
    color: #fff;
    margin: 0 auto;
`

export const Ul = styled.ul`
    list-style: none;

    li{
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
     margin-top: 12px;
     padding: 20px;
     border-radius: 15px;
     background-color: rgba( 1, 1, 1, 0.8);
     color: #fff;
     text-transform: uppercase;
     cursor: pointer;
     transition: background-color 0.4s ease-in-out;

     &:hover{
        background-color: rgba(1, 206, 9, 0.5);
     }
    }
`