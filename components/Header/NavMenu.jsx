import { animated, easings, useSpring } from "@react-spring/web";
import { useContext, useEffect } from "react";
import { MenuContext } from "../../utils/menuStateContext";

export default function NavMenu() {
  const isMenuOpen = useContext(MenuContext);

  const [navAnimation, api] = useSpring(() => ({
    from: { transform: "scaleY(0)", transformOrigin: "top" },

    config: {
      duration: 300,
      easings: easings.easeInOutBack,
    },

    delay: 50,
  }));

  const navItems = [
    {
      name: "Skills",
      id: "#about",
    },
    {
      name: "Experience",
      id: "#work",
    },
    {
      name: "Projects",
      id: "#projects",
    },
  ];

  useEffect(() => {
    if (isMenuOpen) {
      api.start(() => ({
        from: { transform: "scaleY(0)" },
        to: { transform: "scaleY(1)" },
      }));
    } else {
      api.start(() => ({
        from: {
          transform: "scaleY(1)",
        },
        to: { transform: "scaleY(0)" },
      }));
    }
  }, [isMenuOpen]);

  return (
    <animated.nav
      style={navAnimation}
      className="absolute z-50 top-[3.2rem] right-2.5 flex flex-col justify-between items-start bg-colorPrimaryLight bg-opacity-95 border border-colorSecondaryLight/40 rounded-md"
    >
      {navItems.map((navItem) => (
        <>
          <a
            href={navItem.id}
            key={navItem.id}
            className="m-1 p-2 active:after-click"
          >
            {navItem.name}
          </a>
          <span className="h-[0.05rem] w-[100%] bg-colorSecondaryLight/40 last-of-type:hidden"></span>
        </>
      ))}
    </animated.nav>
  );
}
