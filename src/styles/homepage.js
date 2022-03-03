import styled from "styled-components";
import media from './media';

export const HomeMain = styled.main`
    padding-top: 170px;
    display: flex;
    justify-content: center;

    section {
        display: grid;
        grid-template-columns: 260px;
        grid-column-gap: 32px;
        grid-row-gap: 24px;

        ${media.tablet`
            grid-template-columns: repeat(2, 260px);
        `}

        ${media.desktop`
            grid-template-columns: repeat(3, 260px);
        `}

        ${media.widescreen`
            grid-template-columns: repeat(4, 260px);
        `}
    }
`;