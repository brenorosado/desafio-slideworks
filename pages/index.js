import Book from '../src/components/Book';
import { HomeMain } from '../src/styles/homepage';

const Home = ({ booksList }) => {
  console.log('booksList', booksList);

  return (
    <HomeMain>
      <section>
        {
          booksList.map(item => <Book data={item}/>)
        }
      </section>
    </HomeMain>
  )
};

export const getServerSideProps = async () => {
  const res = await fetch('https://fakerapi.it/api/v1/books');
  const booksList = await res.json();

  return {
    props: {
      booksList: booksList.data
    }
  };
};

export default Home;