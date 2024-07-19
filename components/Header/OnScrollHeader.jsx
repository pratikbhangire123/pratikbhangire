import { animated, easings, useSpring } from "@react-spring/web";
import { SubHeader } from "../index";

export default function OnScrollHeader() {
  const headerProps = useSpring({
    from: {
      opacity: 0,
    },

    to: {
      opacity: 1,
    },

    config: {
      easings: easings.easeInOutBack,
      duration: 300,
    },
  });

  return (
    // px-8 md:px-16 xl:px-24

    <animated.header
      id="scrollheader"
      style={headerProps}
      className={`fixed left-0 right-0 z-50 flex items-center justify-center
      overflow-x-clip`}
    >
      <div
        className={`px-1 bg-colorPrimaryLight bg-opacity-80 border border-colorSecondaryLight/40 gap-2 rounded-3xl`}
      >
        <SubHeader />
      </div>
    </animated.header>
  );
}
