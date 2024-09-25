export default function NavMenu() {
  const navItems = [
    {
      name: "About",
      id: "#about",
    },
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
