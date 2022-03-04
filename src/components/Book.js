import Image from "next/image";
import { BookContainer, Title, AuthorName, GenreInfo, PublishedInfo, GenreAndPublishedContainer } from '../styles/book';
import { formatData } from "../helpers/DataHelper";

const Book = ({ data }) => {
    const { title, image, description, author, genre, published } = data;

    return (
        <BookContainer key={title}>
            <Image src={image} alt={title} width={227} height={224}/>
            <Title>{title}</Title>
            <AuthorName>{author}</AuthorName>
            <p>{description}</p>
            <GenreAndPublishedContainer>
                <GenreInfo><span>{genre}</span></GenreInfo>
                <PublishedInfo><span>{formatData(published)}</span></PublishedInfo>
            </GenreAndPublishedContainer>
        </BookContainer>
    );
};

export default Book;