import Image from "next/image";
import Link from "next/link";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { CardTitle, CardParagraph } from "../index";

export default function ProjectCard({
  projectImage,
  projectTitle,
  projectInfo,
  projectUrl,
}) {
  return (
    <motion.li className="flex flex-col w-[80vw] md:w-[45vw] xl:w-[30vw] bg-colorPrimaryLight/10 backdrop-blur-md border border-colorSecondaryLighter/10 rounded-lg cursor-all-scroll">
      <div className="relative rounded-lg">
        <Image
          src={projectImage}
          alt={`${projectTitle} Project's Thumbnail`}
          width={300}
          height={300}
          className="w-full rounded-t-lg"
        />

        <div className="absolute top-0 left-0 w-full h-full bg-vignette rounded-t-lg"></div>
      </div>

      <div className="p-4 space-y-4">
        <div className="flex w-full items-center justify-between">
          <CardTitle>{projectTitle}</CardTitle>

          <Link
            href={projectUrl}
            target="_blank"
            className="text-base md:text-lg xl:text-xl text-colorSecondaryLighter/50 hover:text-colorSecondaryLight"
          >
            <BsBoxArrowUpRight />
          </Link>
        </div>

        <CardParagraph>{projectInfo}</CardParagraph>
      </div>
    </motion.li>
  );
}
