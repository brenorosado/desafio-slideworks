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
    width: 60%;
    display: flex;
    flex-direction: column;
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
    
    ${media.desktop`
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    `};

    span {
        font-size: 15px;
        margin-right: 30px;
        ${media.desktop`
        
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