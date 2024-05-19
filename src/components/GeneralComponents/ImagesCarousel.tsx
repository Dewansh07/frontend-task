// components/InfiniteCarousel.js
"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import LocationSVG from "../SVGComponents/LocationSVG";

const ImagesCarousel = ({
  images,
  activeWord,
}: {
  images: string[];
  activeWord: string;
}) => {
  const controls = useAnimation();
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    // This function handles the animation of images in hero component
    const sequence = async () => {
      for (let i = 0; i < images.length; i++) {
        setActiveImage(i);
        if (i === images.length - 1) break;
        await controls.start({
          x: [`-${i * 33}%`, `-${i * 31.5}%`],
          transition: { duration: 0.5, ease: "easeInOut" },
        });
        setActiveImage(i);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        await controls.start({
          x: `-${(i + 1) * 33}%`,
          transition: { duration: 0.5, ease: "easeInOut" },
        });
      }
      setActiveImage(0);
      // Loop back to the initial position
      await controls.start({
        x: "0%",
        transition: { duration: 0.5, ease: "easeInOut" },
      });
      sequence();
    };
    sequence();
  }, [controls, images.length]);

  return (
    <div className="flex z-[999] ml-[15%] sm:ml-[30%] lg:ml-[40%]">
      <motion.div className="flex self-center" animate={controls}>
        {images.map((src, index) => (
          <div
            key={index}
            className={`flex flex-col justify-center w-[300px] sm:w-[412px] mr-4 sm:mr-12`} // Add margin to create gap between images
          >
            {activeWord === "Collections" && (
              <div
                className={`flex flex-col text-white mb-4 transition-all mt-4 xs:mt-0 ${
                  activeImage === index || activeImage + 1 === index
                    ? "opacity-100"
                    : "opacity-0"
                }`}
              >
                <p className="text-base xs:text-lg sm:text-3xl font-bold">Lunar Palace:</p>
                <p className="text-sm xs:text-base sm:text-2xl font-bold"> (ft. Kanye west)</p>
              </div>
            )}
            <div className="relative">
              <img
                src={src}
                alt={`carousel-${index}`}
                className={`w-full object-cover  ${activeWord === "Events" ? "h-[400px] sm:h-[550px]" : "h-[450px] sm:h-[500px]" } w-[300px] sm:w-[412px] ${
                  activeImage === index ? "opacity-100" : "opacity-50"
                }`}
              />
              {activeWord === "Events" && (
                <div className={`flex flex-col text-white gap-12 absolute bottom-4 left-4 ${
                  activeImage === index ? "opacity-0" : "opacity-100"
                }`}>
                  <p className="text-[46px] font-bold">Event Name</p>
                  <div className="flex gap-8 items-center">
                    <LocationSVG />{" "}
                    <p className="font-medium text-xl">Location</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ImagesCarousel;
