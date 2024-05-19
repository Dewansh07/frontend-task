"use client";
import React, { useEffect, useState } from "react";
import LogoSVG from "../SVGComponents/LogoSVG";
import ToggleButton from "../GeneralComponents/ToggleButton";
import Image from "next/image";
import AnimatedBanner from "../GeneralComponents/AnimatedBanner";
import ImagesCarousel from "../GeneralComponents/ImagesCarousel";
import EventsRightSide from "../GeneralComponents/EventsRightSide";
import CollectionsRightSide from "../GeneralComponents/CollectionsRightSide";

const collectionImages = [
  "/images/collection-one.png",
  "/images/collection-two.png",
  "/images/collection-three.png",
  "/images/collection-four.png",
];

const eventImages = [
  "/images/event-one.png",
  "/images/collection-two.png",
  "/images/event-two.png",
  "/images/collection-four.png",
];

const Home = () => {
  const [windowWidth, setWindowWidth] = useState<any>(1024);
  const [activeWord, setActiveWord] = useState("Events");

  // handling the toggle of event and collection button
  const handleClick = (word: string) => {
    setActiveWord(word);
  };

  // this useeffect is handling the adjustment of width size according to the screen
  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
    }
    console.log(windowWidth);

    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });

    return () => {
      window.removeEventListener("resize", () => {
        setWindowWidth(window.innerWidth);
      });
    };
  }, [windowWidth]);
  return (
    <div className="flex flex-col lg:flex-row lg:h-screen overflow-hidden w-full">
      <div className="flex flex-col w-full lg:w-7/12 py-8">
        <div className="flex gap-4 items-center ml-8">
          <LogoSVG />
          <h1 className="text-accent font-extrabold text-[40px]">Astrix.</h1>
        </div>
        <div className="flex h-[80vh] w-full py-4 overflow-hidden">
          <div className="absolute h-[75vh] hidden sm:flex flex-col justify-between text-muted text-[128px] leading-[112px] ml-8">
            <div>
              <p>ASTR</p>
              <p>IX</p>
            </div>
            {activeWord === "Events" ? (
              <div>
                <p>EVE</p>
                <p>NTS</p>
              </div>
            ) : (
              <div>
                <p>COLL</p>
                <p>ECTI</p>
                <p>BLE</p>
              </div>
            )}
          </div>
          <ImagesCarousel
            images={activeWord === "Events" ? eventImages : collectionImages}
            activeWord={activeWord}
          />
        </div>
        <div className="ml-8">
          <ToggleButton activeWord={activeWord} handleClick={handleClick} />
        </div>
      </div>
      <AnimatedBanner windowWidth={windowWidth} />
      <div className="w-full lg:w-5/12 text-white overflow-hidden px-8 lg:pl-[4%] py-12 lg:pt-6 2xl:pt-12">
        {activeWord === "Events" ? (
          <EventsRightSide />
        ) : (
          <CollectionsRightSide />
        )}
        <div className="flex w-full mt-20">
          {activeWord === "Events" && (
            <div className="h-[105px] w-[105px] relative">
              <Image src={"/images/barcode.png"} alt="qr-scanner" fill />
            </div>
          )}
          <button className="self-end text-black bg-accent text-2xl px-6 py-2 rounded-3xl font-bold ml-auto lg:mr-6">
            Join Waitlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
