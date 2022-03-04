import styled from "styled-components";
import media from "./media";

export const FooterContainer = styled.footer`
    margin-top: 84px;
    background: #1E2833;
    height: 270px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const FooterContent = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;

    ${media.tablet`
        width: 60%;
    `}
`;

export const LogoContent = styled.div`
    border-bottom: 1px solid rgba(255, 255, 255, .1);
    height: 80px;
`;

export const LinksContent = styled.div`
    height: 80px;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    font-family: 'DM Sans', sans-serif;
    
    div {
        width: 100%;
        display: flex;
        justify-content: space-evenly;
    }

    ${media.desktop`
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        div {
            width: auto;
        }
    `};

    span {
        font-size: 12px;
        margin-right: 0px;

        ${media.desktop`
            margin-right: 30px;
            font-size: 15px;
        `}
    }

    a {
        font-size: 22px;
        color: white;
        margin: 0 20px;

        ${media.desktop`
            margin: 0;
            margin-left: 40px;
        `}
    }
`;