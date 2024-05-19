import React from "react";
import LocationSVG from "../SVGComponents/LocationSVG";
import AlarmSVG from "../SVGComponents/AlarmSVG";
import LineupSlider from "./LineupSlider";
import Image from "next/image";

const images = [
  "/images/artist-one.png",
  "/images/artist-two.png",
  "/images/artist-three.png",
];

const EventsRightSide = () => {
  return (
    <div className="lg:-ml-6 xl:ml-0">
      <p className="font-bold text-xl xl:text-[26px] lg:w-8/12">
        Explore Your First Event
      </p>
      <div className="flex flex-col gap-8 mt-10 lg:mt-8 xl:mt-12">
        <p className="font-extrabold text-5xl 2xl:text-[57px] leading-[62px]">
          Event Name
        </p>
        <div className="flex gap-8 lg:gap-4 xl:gap-8">
          <div className="flex items-center lg:gap-2 xl:gap-4">
            <LocationSVG />
            <p className="text-white text-[22px] lg:text-lg xl:text-[22px] font-semibold">
              Venue
            </p>
          </div>
          <div className="flex items-center gap-4 lg:gap-2 xl:gap-4">
            <AlarmSVG />
            <p className="text-white text-[22px] lg:text-lg xl:text-[22px] font-semibold lg:text-nowrap">
              04/3/2024 @19:00
            </p>
          </div>
        </div>
        <p className="font-medium lg:w-10/12 xl:w-9/12">
          Lorem ipsum dolor sit amet consectetur. Ac lorem massa in morbi et sed
          ipsum. Pellentesque mattis condimentum ut nulla.
        </p>
        {/* <LineupSlider /> */}
        <p className="text-white font-semibold text-[26px]">Artist Lineup</p>
        <div className="flex mt-8 w-full lg:w-fit">
          <div  className="w-1/3 h-[180px] sm:h-[250px] lg:h-[120px] lg:w-[120px] xl:h-[140px] xl:w-[140px] 2xl:h-[180px] 2xl:w-[180px] relative">
            <Image src={"/images/artist-three.png"} alt={`artist-one`} fill />
          </div>
          <div  className="w-5/12 sm:w-1/3 h-[180px] sm:h-[250px] lg:h-[120px] lg:w-[120px] xl:h-[140px] xl:w-[140px] 2xl:h-[180px] 2xl:w-[180px] z-10 scale-125 relative">
            <Image src={"/images/artist-one.png"} alt={`artist-two`} fill />
          </div>
          <div  className="w-1/3 h-[180px] sm:h-[250px] lg:h-[120px] lg:w-[120px] xl:h-[140px] xl:w-[140px] 2xl:h-[180px] 2xl:w-[180px] relative">
            <Image src={"/images/artist-two.png"} alt={`artist-three`} fill />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsRightSide;
