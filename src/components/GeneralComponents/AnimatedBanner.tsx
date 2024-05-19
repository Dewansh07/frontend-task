import React from "react";
import { motion } from "framer-motion";
import AstrixSVG from "../SVGComponents/AstrixSVG";
import { Krona_One } from "next/font/google";

const kronaOne = Krona_One({ subsets: ["latin"], weight: "400" });

const AnimatedBanner = ({ windowWidth }: any) => {
  return (
    <>
      {windowWidth >= 1024 ? (
        <div
          className={`relative h-screen overflow-hidden py-4 bg-secondary w-[90px] ${kronaOne.className}`}
        >
          <motion.div
            className="h-full flex flex-col gap-8 justify-around items-center"
            initial={{ y: "5%" }}
            animate={{ y: ["5%", "-105%"] }}
            transition={{
              duration: 3,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            <motion.p
              style={{ writingMode: "vertical-rl" }}
              className="flex items-center w-full text-black text-2xl text-nowrap"
            >
              Event: Oasis Bus tour, JLN Stadium, Delhi
            </motion.p>
            <motion.div className="w-full flex items-center justify-center">
              <AstrixSVG />
            </motion.div>
            <motion.p
              style={{ writingMode: "vertical-rl" }}
              className="flex items-center w-full text-black text-2xl text-nowrap"
            >
              Collection Live: Meta Lives, live on astrix
            </motion.p>
            <motion.p
              style={{ writingMode: "vertical-rl" }}
              className="flex items-center w-full text-black text-2xl text-nowrap"
            >
              Event: Oasis Bus tour, JLN Stadium, Delhi
            </motion.p>
          </motion.div>
        </div>
      ) : (
        <div
          className={`relative w-full overflow-hidden bg-secondary py-6 ${kronaOne.className}`}
        >
          <motion.div
            className="h-full flex flex-row gap-40 sm:gap-8 justify-center items-center"
            initial={{ x: "100%" }}
            animate={{ x: ["100%", "-150%"] }}
            transition={{
              duration: 5,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            <motion.p className="flex items-center w-full text-black text-lg sm:text-2xl text-nowrap">
              Event: Oasis Bus tour, JLN Stadium, Delhi
            </motion.p>
            <motion.div className="w-full flex items-center justify-center">
              {windowWidth >= 640 ? <AstrixSVG /> : ""}
            </motion.div>
            <motion.p className="flex items-center w-full text-black text-lg sm:text-2xl text-nowrap">
              Collection Live: Meta Lives, live on astrix
            </motion.p>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default AnimatedBanner;
