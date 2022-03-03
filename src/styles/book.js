import styled from 'styled-components';

export const BookContainer = styled.article`
    font-family: 'Inter', sans-serif;
    padding: 16px;
    border: 1px solid #DBDBDB;
    border-radius: 4px;
    display: flex;
    flex-direction: column;

    span {
        margin: 6px 0;
    }

    img {
        border-radius: 4px;
    }

    p {
        font-size: 14px;
        color: #787885;
        margin: 6px 0;
    }
`;

export const Title = styled.span`
    font-size: 16px;
    color: black;
`;

export const AuthorName = styled.span`
    font-size: 14px;
    color: #787885;
`;

export const GenreInfo = styled.div`
    border: 1px solid #9DC2FF;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 12px;

    span {
        font-size: 14px;
        font-weight: 500;
        color: #2264D1;
    }
`;

export const PublishedInfo = styled.div`
    span {
        font-size: 14px;
        font-weight: 500;
        color: #2264D1;
    }
`;

export const GenreAndPublishedContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;