import Image from "next/image";
import { Avatar } from "../../public/index";

export default function Profile() {
  // flex absolute inset-x-0 -bottom-2 justify-center

  return (
    <div id="profile" className="z-10 -mb-8 mx-auto">
      <div className="w-20 md:w-28 xl:w-36 h-20 md:h-28 xl:h-36 ring-1 ring-colorPrimary rounded-full">
        <Image src={Avatar} alt="photo" width={150} className="rounded-full" />
      </div>
    </div>
  );
}
