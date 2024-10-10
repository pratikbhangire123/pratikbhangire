import { H2, Button, SectionContainer, SpecialityCard } from "../index";
import {
  BsFillFunnelFill,
  BsFillRocketFill,
  BsFileRichtextFill,
} from "react-icons/bs";
import { useAboutModal } from "../../contexts/aboutModalState";
import { motion, transform } from "framer-motion";

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
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
      >
        <H2>Crafting beautiful UIs for 3 years, with a focus on</H2>
      </motion.span>

      <div className="flex flex-col my-14 space-y-14 items-center">
        <motion.ul
          initial={{ opacity: 0, transform: "translateY(32px)" }}
          whileInView={{ opacity: 1, transform: "translateY(0)" }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col md:flex-row flex-wrap w-full justify-center gap-10"
        >
          {specialities.map((speciality) => (
            <SpecialityCard
              icon={speciality.icon}
              title={speciality.title}
              description={speciality.description}
            />
          ))}
        </motion.ul>

        <motion.span
          initial={{ opacity: 0, transform: "translateY(32px)" }}
          whileInView={{ opacity: 1, transform: "translateY(0)" }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Button variant="secondary" onClick={openModal}>
            More About
          </Button>
        </motion.span>
      </div>
    </SectionContainer>
  );
}
