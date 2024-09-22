import { useEffect, useState } from "react";
import { NavMenu } from "../index";
import { CgMenuGridO } from "react-icons/cg";
import { motion, useAnimation } from "framer-motion";

export default function Header() {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpened) {
        controls.start({
          width: "48px",
          transition: { duration: 0.5, ease: "easeInOut" },
        });
        setIsMenuOpened(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMenuOpened, controls]);

  const toggleMenu = () => {
    setIsMenuOpened(!isMenuOpened);

    controls.start({
      width: isMenuOpened ? "48px" : "250px",
      transition: { duration: 0.5, ease: "easeInOut" },
    });
  };

  return (
    <>
      <header
        id="header"
        className={`flex h-[10vh] px-4 md:px-6 xl:px-8 py-8 md:py-10 xl:py-12 items-center justify-center bg-colorPrimary text-colorSecondary`}
      >
        <motion.div
          initial={{ width: "48px", height: "48px" }}
          animate={controls}
          className="fixed top-6 z-40 inline-flex items-center justify-center p-1 ring-1 ring-colorPrimaryLight bg-colorPrimaryLight/50 backdrop-blur-md rounded-full overflow-hidden"
        >
          {!isMenuOpened && (
            <button
              onClick={toggleMenu}
              className="p-1 text-lg md:text-xl xl:text-2xl"
            >
              <motion.span
                initial={{ opacity: 1 }}
                animate={{ opacity: isMenuOpened ? 0 : 1 }}
                transition={{ duration: 0.2 }}
              >
                <CgMenuGridO />
              </motion.span>
            </button>
          )}

          {isMenuOpened && (
            <motion.span
              className="flex justify-around w-full px-4 overflow-x-scroll scrollbar-hide"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <NavMenu />
            </motion.span>
          )}
        </motion.div>
      </header>
    </>
  );
}
