"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

const images = [
  "/images/artist-one.png",
  "/images/artist-two.png",
  "/images/artist-three.png",
];

const LineupSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      await controls.start({
        left: ["0%", "0%", "-100%", "-100%", "0%"],
        scale: [1, 1.2, 1.2, 1, 1],
        transition: { duration: 2, times: [0, 0.25, 0.5, 0.75, 1] },
      });
      setCurrentIndex((currentIndex + 1) % 3);
    };

    sequence();
    const interval = setInterval(sequence, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [currentIndex, controls]);

  return (
    <div className="relative w-full h-[500px] flex justify-center items-center overflow-hidden">
      <div className="absolute w-full h-full flex justify-center items-center">
        {images.map((src, index) => (
          <motion.div
            key={index}
            // animate={controls}
            className={`absolute ${index === currentIndex ? "z-10" : "z-0"}`}
            style={{
              left: `${(index - 1) * 100}%`,
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={src}
              alt={`carousel-${index}`}
              className={`object-cover w-full h-full ${
                index === currentIndex ? "scale-125" : "scale-100"
              }`}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default LineupSlider;
