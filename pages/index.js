import Head from "next/head";
import { Poppins } from "next/font/google";
import Hero from "../components/heroSection";
import About from "../components/aboutSection";
import Work from "../components/workSection";
import Contact from "../components/contactSection";
import Footer from "../components/footerSection";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Pratik Bhangire</title>
        <meta name="description" content="Pratik's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logoLight.png" />
      </Head>
      <main className={`${poppins.className} flex flex-col m-0`}>
        <Hero />
        <About />
        <Work />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
