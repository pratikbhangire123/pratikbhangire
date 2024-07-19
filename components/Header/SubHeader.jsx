import { CgMenuRightAlt, CgMenuRight } from "react-icons/cg";
import { NavMenu } from "../index";
import { useContext, useState } from "react";
import { MenuContext } from "../../utils/menuStateContext";

export default function SubHeader() {
  const [isMenuOpen, setIsMenuOpen] = useContext(MenuContext);

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

  const handleOpenMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex w-max items-center p-1 justify-end gap-2">
      <button
        onClick={handleDownloadResume}
        className="px-2 py-1 text-xs md:text-sm xl:text-base border-2 border-colorSecondary rounded-full transition ease-in-out delay-150 duration-300 hover:text-colorPrimary hover:bg-colorSecondary active:translate-y-1 active:scale-75 max-lg:active:text-colorPrimary max-lg:active:bg-colorSecondary"
      >
        Download Resume
      </button>

      <div className="relative flex items-center">
        {isMenuOpen && <NavMenu />}

        <button
          onClick={handleOpenMenu}
          className="p-2 text-xl md:text-2xl xl:text-3xl active:after-click"
        >
          {isMenuOpen ? <CgMenuRight /> : <CgMenuRightAlt />}
        </button>
      </div>
    </div>
  );
}
