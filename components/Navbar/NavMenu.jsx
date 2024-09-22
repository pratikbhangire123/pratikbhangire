import Link from "next/link";
import { About } from "../index";
import { useAboutModal } from "../../contexts/aboutModalState";

export default function NavMenu() {
  const { openModal } = useAboutModal();
  const navItems = [
    {
      name: "Projects",
      id: "#projects",
    },
    {
      name: "Contact",
      id: "#contact",
    },
  ];

  return (
    <>
      <nav className="flex gap-2">
        <button onClick={openModal}>About</button>

        {navItems.map((navItem) => (
          <>
            <a
              href={navItem.id}
              key={navItem.name}
              className="p-1 active:after-click"
            >
              {navItem.name}
            </a>
          </>
        ))}
      </nav>
    </>
  );
}
