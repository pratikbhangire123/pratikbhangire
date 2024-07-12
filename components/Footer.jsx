import { DarkLogo } from "../public/index";
import Image from "next/image";
import { SectionContainer } from "./index";

export default function Footer() {
  return (
    <SectionContainer
      id="footer"
      bgColor="bg-colorNeutral"
      className="flex flex-col items-center"
    >
      <Image src={DarkLogo} alt="Logo" width={30} height={30} />
      <p className="mt-4 text-center">Simplicity is my Philosophy.</p>
      <p className="mt-8 text-center text-xs">
        Created by me &#169; twentytwentythree
      </p>
    </SectionContainer>
  );
}
