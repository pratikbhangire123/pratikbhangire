import "../styles/globals.css";
import { AboutModalProvider } from "../contexts/aboutModalState";

export default function App({ Component, pageProps }) {
  return (
    <AboutModalProvider>
      <Component {...pageProps} />
    </AboutModalProvider>
  );
}
