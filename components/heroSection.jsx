import Header from "./header";
import ProfileMenu from "./ui_components/profileMenu";
import ProfileMenuTemp from "./ui_components/profileMenuTemp";

export default function Hero() {
  return (
    <section className="flex flex-col relative px-8 md:px-16 xl:px-24 pt-4 md:pt-8 xl:pt-12 h-[90vh] md:h-screen text-almostwhite bg-almostblack">
      <Header />
      <div className="flex flex-col h-full items-center justify-center">
        <h1 className="text-center text-3xl md:text-4xl xl:text-5xl font-black">
          Frontend Web Developer
        </h1>
        <p className="my-5 text-center md:text-lg xl:text-xl font-extralight">
          I build complex web interfaces in the simplest way possible, and I
          love it!
        </p>
      </div>
      {/* <ProfileMenu /> */}
      <ProfileMenuTemp />
    </section>
  );
}
