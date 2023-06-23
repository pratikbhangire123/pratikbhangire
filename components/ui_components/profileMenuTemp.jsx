import Image from "next/image";
import PratikBhangire from "../../public/PratikBhangire.jpg";
import { useEffect } from "react";

export default function ProfileMenuTemp() {
  return (
    <div
      id="profile"
      className="flex absolute inset-x-0 -bottom-2 justify-center"
    >
      <div className="relative w-20 md:w-28 xl:w-36 h-20 md:h-28 xl:h-36 rounded-full">
        <Image
          src={PratikBhangire}
          alt="photo"
          width={150}
          className="rounded-full"
        />
      </div>
    </div>
  );
}
