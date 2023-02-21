import styled from "styled-components";

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

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    background: rgba(17, 17, 17, 0.4);
    height: 100px;
    min-width: 100%;
    margin: 0 auto;
`

export const BodyContainer = styled.div`
    padding: 0;
    border: 0;
    box-sizing: border-box;
    /* background-image: url(../../assets/background_body.png); */
    background-repeat: no-repeat;
    background-size: cover;
    margin: 0 auto;
`

export const LogoContainer = styled.img`
    width: 200px;
    height: 50px;
    margin: 15px;
`

export const ContainerButtonClose = styled.div`
    display: flex;
    width: 40px;
    height: 40px;
    margin: 10px 20px 0 0;
`

export const ButtonClose = styled.button`
    display: flex;
    width: 40px;
    height: 40px;
    background-color: transparent;
    border: 0;
    cursor: pointer;

    img {
        width: 30px;
        height: 30px;
        position: relative;
    }
`