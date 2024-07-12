import { LightLogo } from "../public/index";
import Image from "next/image";

export default function Header() {
  const handleDownloadResume = () => {
    fetch("/assets/pbresume.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);

        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Pratik Bhangire Resume.pdf";
        alink.click();
      });
    });
  };

  return (
    <header
      id="header"
      className="flex max-md:pt-4 items-center justify-between overflow-clip"
    >
      <Image src={LightLogo} alt="Logo" width={30} height={30} />
      <button
        onClick={handleDownloadResume}
        className="px-2 py-2 text-xs md:text-sm xl:text-base border-2 border-colorSecondary rounded-full transition ease-in-out delay-150 duration-300 hover:text-colorPrimary hover:bg-colorSecondary active:translate-y-1 active:scale-75 max-lg:active:text-colorPrimary max-lg:active:bg-colorSecondary"
      >
        Download Resume
      </button>
    </header>
  );
}
