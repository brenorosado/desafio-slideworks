import { GlobalStyle } from "../src/styles/global";
import Menu from "../src/components/Menu";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Menu />
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
};

export default App;