import { H3, Career, TechStack, SocialHandles, Divider } from "../index";
import { useAboutModal } from "../../contexts/aboutModalState";
import { AnimatePresence, motion } from "framer-motion";
import { BsChatSquareQuote, BsClock, BsGeoAlt, BsX } from "react-icons/bs";
import Image from "next/image";
import ProfilePic from "../../public/assets/PratikBhangire.jpg";

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

            <div className="flex flex-col w-2/3 self-center">
              <h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-colorPrimary">
                About.
              </h2>

              <div className="mt-8 md:mt-16 space-y-8">
                <div className="flex items-center gap-4">
                  <Image
                    src={ProfilePic}
                    alt="Pratik's profile picture"
                    width={70}
                    height={70}
                    className="ring-1 ring-colorPrimaryLight/20 rounded-full"
                  />

                  <div className="flex flex-col gap-2">
                    <h3 className="mt-0 text-2xl font-bold text-colorPrimary/90">
                      Pratik Bhangire
                    </h3>

                    <div className="flex items-center gap-2 text-colorPrimaryLight">
                      <span>
                        <BsGeoAlt />
                      </span>

                      <p>Pune, Maharashtra, India.</p>

                      <span className="ml-4">
                        <BsClock />
                      </span>

                      <p>GMT+5:30</p>

                      <span className="ml-4">
                        <BsChatSquareQuote />
                      </span>

                      <p>English, Hindi, & Marathi.</p>
                    </div>
                  </div>
                </div>

                <Divider />

                <p className="text-lg md:text-xl leading-9 md:leading-9 text-colorPrimary/90">
                  I blend
                  <span className="font-semibold italic">
                    &nbsp;design and code&nbsp;
                  </span>
                  to craft websites that not only good looking but also drive
                  meaningful
                  <span className="font-semibold italic">
                    &nbsp;business results
                  </span>
                  .
                  <br />
                  To me, web interfaces are more than just visuals; they&apos;re
                  a journey, an experience. My work is where
                  <span className="font-semibold italic">
                    &nbsp;creativity meets strategy
                  </span>
                  , shaping user interactions that leave a lasting impact.
                </p>

                <Career />

                <TechStack />

                <H3>Socials</H3>

                <SocialHandles variant="dark" className="ml-2" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
