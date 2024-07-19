import Link from "next/link";
import Image from "next/image";

export default function SocialLink({ href, src, alt }) {
  return (
    <div className="p-2 active:after-click">
      <Link href={href} target="_blank">
        <Image src={src} alt={alt} width={25} height={25} />
      </Link>
    </div>
  );
}
