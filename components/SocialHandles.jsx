import {
  BsEnvelopeFill,
  BsGithub,
  BsLinkedin,
  BsTwitterX,
} from "react-icons/bs";
import Link from "next/link";

export default function SocialHandles({ variant = "dark", className }) {
  const socialIcons = [
    {
      name: "X (Twitter)",
      icon: <BsTwitterX />,
      href: "https://x.com/PratikBhangire",
    },
    {
      name: "LinkedIn",
      icon: <BsLinkedin />,
      href: "https://www.linkedin.com/in/pratik-bhangire",
    },
    {
      name: "GitHub",
      icon: <BsGithub />,
      href: "https://github.com/pratikbhangire123",
    },
    {
      name: "pratikbhangire@gmail.com",
      icon: <BsEnvelopeFill />,
      href: "mailto:pratikbhangire@gmail.com",
    },
  ];

  const variantClasses = {
    light: "text-colorSecondaryLighter border-colorSecondaryLighter/90 after:border-colorSecondaryLighter",
    dark: "text-colorPrimaryLight border-colorPrimaryLight/90 after:border-colorPrimaryLight",
  };

  return (
    <nav
      id="connect"
      className={`mt-8 flex flex-wrap gap-x-4 md:gap-x-6 text-sm md:text-base xl:text-lg ${className}`}
    >
      {socialIcons.map((icon) => (
        <Link
          href={icon.href}
          target="_blank"
          key={icon.name}
          className={`relative block py-1 border-b after:block after:py-0.5 after:content-[''] after:absolute after:border-b-[1.5px] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left ${variantClasses[variant]}`}
        >
          <span>{icon.name}</span>
        </Link>
      ))}
    </nav>
  );
}
