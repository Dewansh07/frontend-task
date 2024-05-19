import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";

const ellipses = [
    "/images/Ellipse-1.png",
    "/images/Ellipse-2.png",
    "/images/Ellipse-3.png",
    "/images/Ellipse-4.png",
    "/images/Ellipse-5.png",
  ];
  
const collectibles = [
  {
    year: "2024",
    designer: "Pablo",
    name: "Collectible Name",
    image: "/images/collectible.png",
  },
  {
    year: "2024",
    designer: "Pablo",
    name: "Collectible Name",
    image: "/images/collectible.png",
  },
  {
    year: "2024",
    designer: "Pablo",
    name: "Collectible Name",
    image: "/images/collectible.png",
  },
  {
    year: "2024",
    designer: "Pablo",
    name: "Collectible Name",
    image: "/images/collectible.png",
  },
  {
    year: "2024",
    designer: "Pablo",
    name: "Collectible Name",
    image: "/images/collectible.png",
  },
];

const CollectionsRightSide = () => {
  return (
    <div>
      <p className="font-bold text-xl xl:text-[26px] lg:w-8/12">
        Explore Your First Collectible
      </p>
      <div className="flex flex-col gap-4 2xl:gap-6 mt-8 2xl:mt-10">
        <p className="font-extrabold mb-4 lg:mb-0 text-3xl sm:text-4xl lg:text-5xl 2xl:text-[57px] lg:leading-[62px] lg:w-1/3">
          Meta Lives
        </p>
        <p className="font-bold text-lg sm:text-2xl">Live in Astrix</p>
        <p className="text-sm sm:text-base font-medium lg:w-8/12 2xl:w-1/2">
          Lorem ipsum dolor sit amet consectetur. Ac lorem massa in morbi et sed
          ipsum. Pellentesque mattis condimentum ut nulla.{" "}
        </p>
        <div className="flex flex-col sm:flex-row gap-8 items-center mt-4">
          <div className="flex items-center">
            {ellipses.map((image, index) => {
              return (
                <div
                  className={`relative h-10 w-10 ${index > 0 ? "-ml-2" : ""}`}
                  key={index}
                >
                  <Image
                    src={image}
                    alt={`eclipse ${index + 1}`}
                    height={100}
                    width={100}
                  />
                </div>
              );
            })}
          </div>
          <p className="text-xl font-medium">22k people interested</p>
        </div>
      </div>
      <p className="text-sm mt-12 mb-4">Collectibles</p>
      <div className="overflow-hidden lg:-mr-[100px]">
        <Swiper
          slidesPerView={3} // Show part of the next slides
          spaceBetween={20}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            768: {
              slidesPerView: 4,
              spaceBetween:40, // Ensure 3 slides are shown, with the middle one centered
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1440: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
          style={{ margin: "0px -200px 0px 0px" }} // Adjust padding to make left and right slides partially visible
        >
          {collectibles.map((item, index) => (
            <SwiperSlide className="" key={index}>
              <div className="flex flex-col gap-2 bg-secondary rounded-md px-4 py-4 cursor-pointer">
                <div className="flex flex-col xs:flex-row gap-1 xs:gap-0 justify-between xs:items-center">
                  <p className="text-white bg-black px-4 text-xs py-1 rounded-2xl w-fit">
                    {item.year}
                  </p>
                  <p className="text-black text-xs">By {item.designer}</p>
                </div>
                <p className="text-black text-center font-bold text-xs">
                  {item.name}
                </p>
                <div className="relative h-[100px] 2xl:h-[140px] w-full">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill={true}
                    className="rounded-lg border border-black"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CollectionsRightSide;
