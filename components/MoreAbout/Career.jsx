import { H3 } from "../index";

export default function Experience() {
  return (
    <div id="career">
      <H3>Career</H3>

      <div className="w-fit mt-8 ml-2 p-4 space-y-2  bg-colorSecondaryLight/20 ring-1 ring-colorPrimary/10 rounded-lg">
        <h4 className="text-base md:text-lg xl:text-xl font-semibold text-colorPrimary/90">
          Software Developer - Frontend
        </h4>

        <div className="flex gap-2 text-xs md:text-sm xl:text-base text-colorPrimaryLight">
          <h5 className="font-medium">MAP Solutions</h5>
          <span>•</span>
          <p>Pune, MH, India.</p>
        </div>

        <div className="flex gap-2 text-xs md:text-sm xl:text-base text-colorPrimaryLight">
          <p className="">October 2021 - February 2024</p>
          <span>•</span>
          <p>2 yr 5 mos</p>
        </div>
      </div>
    </div>
  );
}
