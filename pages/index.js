import Head from "next/head";
import { Poppins } from "next/font/google";
import {
  Header,
  Hero,
  About,
  Projects,
  Contact,
  Footer,
} from "../components/index";
import { motion } from "framer-motion";
import useFramerCursorFollower from "../hooks/useFramerCursorFollower";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Home() {
  const { mousePosition } = useFramerCursorFollower();

  return (
    <>
      <Head>
        <title>Pratik Bhangire</title>
        <meta name="description" content="Pratik's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/logoLight.png" />
      </Head>

      <motion.div
        className="max-lg:hidden fixed -z-0 w-6 h-6 bg-colorNeutral rounded-full opacity-50"
        animate={{
          x: mousePosition.x > 0 ? mousePosition.x - 14 : 0,
          y: mousePosition.y > 0 ? mousePosition.y - 14 : 0,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15 }}
      ></motion.div>

      <About />

      <main
        className={`${poppins.className} flex flex-col m-0 text-colorPrimary`}
      >
        <Header />
        <Hero />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
