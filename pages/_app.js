import "../styles/globals.css";
import MenuState from "../utils/menuStateContext";

export default function App({ Component, pageProps }) {
  return (
    <>
      <MenuState>
        <Component {...pageProps} />
      </MenuState>
    </>
  );
}
