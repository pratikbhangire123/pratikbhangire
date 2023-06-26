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
      <main
        className={`${poppins.className} flex flex-col max-sm:landscape:hidden m-0`}
      >
        <Hero />
        <About />
        <Work />
        <Contact />
        <Footer />
      </main>
      <section
        className={`${poppins.className} flex items-center justify-center h-screen bg-almostblack`}
      >
        <h3 className={`text-xl font-medium text-almostwhite`}>
          Please rotate your mobile to potrait mode!
        </h3>
      </section>
    </>
  );
}
