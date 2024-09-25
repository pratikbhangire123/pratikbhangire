import { H3, Career, TechStack, SocialHandles } from "../index";
import { useAboutModal } from "../../contexts/aboutModalState";
import { AnimatePresence, motion } from "framer-motion";
import { BsX } from "react-icons/bs";

export default function MoreAbout() {
  const { isAboutModalOpen, closeModal } = useAboutModal();

  return (
    <AnimatePresence>
      {isAboutModalOpen && (
        <motion.div
          id="about"
          initial={{ y: "-100vh", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100vh", opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="fixed inset-0 z-50 bg-colorSecondary overflow-auto"
        >
          <motion.div
            initial={{ y: "-100vh", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100vh", opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col p-8"
          >
            <button
              onClick={closeModal}
              className="mx-auto mb-8 md:mb-10 xl:mb-12 p-2 text-xl md:text-2xl xl:text-3xl ring-2 ring-colorPrimary/10 hover:ring-colorPrimary/20 active:animate-spin rounded-full"
            >
              <BsX />
            </button>

            <div className="flex max-md:flex-col">
              <div className="relative md:w-1/2 ">
                <h2 className="sticky top-0 text-6xl md:text-8xl font-bold tracking-tighter text-colorPrimary">
                  About.
                </h2>
              </div>

              <div className="md:w-1/2 mt-8 md:mt-6 space-y-8">
                <p className="text-lg md:text-xl leading-9 md:leading-9 text-colorPrimary/90">
                  I&apos;m experienced Front-End Developer based
                  in the vibrant city of Pune, MH, India.
                  <br />
                  <br />I blend <strong>design and code </strong> to craft
                  websites that not only good looking but also drive meaningful
                  <strong>business results</strong>.
                  <br />
                  <br />
                  To me, web interfaces are more than just visuals; they&apos;re
                  a journey, an experience. My work is where
                  <strong>creativity meets strategy</strong>, shaping user
                  interactions that leave a lasting impact.
                </p>

                <Career />

                <TechStack />

                <H3>Connect with Me</H3>

                <SocialHandles
                  textColor="text-colorPrimaryLight"
                  borderColor="border-colorPrimaryLight"
                  className="ml-2"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
