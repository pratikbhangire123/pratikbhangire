import Image from "next/image";
import Link from "next/link";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";

export default function ProjectCard({
  projectImage,
  projectTitle,
  projectInfo,
  projectUrl,
}) {
  return (
    <motion.li className="flex flex-col w-[80vw] md:w-[45vw] xl:w-[30vw] bg-colorPrimaryLight/10 backdrop-blur-sm border border-colorSecondaryLighter/10 rounded-lg hover:cursor-grab active:cursor-grabbing">
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
          <p className="text-center text-lg md:text-xl xl:text-2xl text-colorSecondaryLight">
            {projectTitle}
          </p>

          <Link
            href={projectUrl}
            target="_blank"
            className="text-base md:text-lg xl:text-xl text-colorSecondaryLighter/50 hover:text-colorSecondaryLight"
          >
            <BsBoxArrowUpRight />
          </Link>
        </div>

        <p className="text-xs md:text-sm xl:text-base font-extralight text-colorSecondaryLighter/60">
          {projectInfo}
        </p>
      </div>
    </motion.li>
  );
}
