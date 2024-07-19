import { LightLogo } from "../../public/index";
import Image from "next/image";
import { OnScrollHeader, SubHeader } from "../index";
import { useState } from "react";
import { animated, useScroll, easings, useSpring } from "@react-spring/web";

export default function Header() {
  const [scrollHeader, setScrollHeader] = useState(false);

  const headerAnimation = useSpring({
    from: {
      opacity: 0,
    },

    to: {
      opacity: !scrollHeader ? 1 : 0,
    },

    config: {
      easings: easings.easeInOutBack,
      duration: 300,
    },
  });

  const { scrollYProgress } = useScroll({
    onChange: ({ value: { scrollYProgress } }) => {
      if (scrollYProgress > 0.05) {
        setScrollHeader(true);
      } else {
        setScrollHeader(false);
      }
    },
  });

  // max-md:pt-4

  return (
    <>
      {scrollHeader == false && (
        <animated.header
          id="header"
          style={headerAnimation}
          className={`fixed left-0 right-0 z-50 flex px-8 md:px-16 xl:px-24 items-center justify-between overflow-x-clip`}
        >
          <div>
            <Image src={LightLogo} alt="Logo" width={30} height={30} />
          </div>

          <SubHeader />
        </animated.header>
      )}

      {scrollHeader && <OnScrollHeader />}
    </>
  );
}
