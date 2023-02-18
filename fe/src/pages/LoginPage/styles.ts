import styled from "styled-components";

export const LoginContainer = styled.div`
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    background-color: #fff;
`

export const HeaderContainer = styled.header`
    margin: 10px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100px;
    text-align: center;
`

export const MainContainer = styled.main`
    width: 100%;
    height: 70vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    padding: 10px;
    width: 300px;
    height: 300px;
    position: relative;
    top: -50px;

    input {
        width: 350px;
        padding: 10px;
        border-radius: 10px;
        text-align: center;
    }
`

export const ButtonContainer = styled.button`
    width: 150px;
    padding: 10px;
    border: 0;
    border-radius: 10px;
    font-weight: bold;
    cursor: pointer;
    transition: 0.4s ease-in-out;
    text-transform: uppercase;

    &:hover {
        border: 1px solid #fff;
        background-color: gray;
        color: #fff;
    }
`

export const FooterContainer = styled.footer`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: -35px;

    .insta {
        display: block;
        text-align: center;
    }
`