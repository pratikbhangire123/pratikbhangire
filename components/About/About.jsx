import { Button, SectionContainer, SpecialityCard } from "../index";
import {
  BsFillFunnelFill,
  BsFillRocketFill,
  BsFileRichtextFill,
} from "react-icons/bs";
import { useAboutModal } from "../../contexts/aboutModalState";

export default function About() {
  const { openModal } = useAboutModal();
  const specialities = [
    {
      icon: <BsFillFunnelFill />,
      title: "Conversion-Focused Design",
      description:
        "Creating designs that encourage meaningful user actions that support overall business goals.",
    },
    {
      icon: <BsFillRocketFill />,
      title: "Performance & SEO",
      description:
        "Implementing best practices for speed, accessibility, and SEO to ensure your website loads quickly and ranks well.",
    },
    {
      icon: <BsFileRichtextFill />,
      title: "Interactivity & Responsiveness",
      description:
        "Ensuring smooth, engaging interactions and layouts that adapt effortlessly across all devices.",
    },
  ];

  return (
    <SectionContainer id="about" bgColor="bg-colorPrimary">
      <p className="text-center text-xl md:text-2xl xl:text-3xl text-colorSecondary">
        Crafting beautiful UIs for 3 years, with a focus on
      </p>

      <div className="flex flex-col my-14 space-y-14 items-center">
        <ul className="flex flex-col md:flex-row flex-wrap w-full justify-center gap-10">
          {specialities.map((speciality) => (
            <SpecialityCard
              icon={speciality.icon}
              title={speciality.title}
              description={speciality.description}
            />
          ))}
        </ul>

        <Button variant="secondary" onClick={openModal}>
          More About
        </Button>
      </div>
    </SectionContainer>
  );
}
