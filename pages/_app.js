import { GlobalStyle } from "../src/styles/global";
import Menu from "../src/components/Menu";
import Footer from "../src/components/Footer";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Menu />
      <GlobalStyle />
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default App;