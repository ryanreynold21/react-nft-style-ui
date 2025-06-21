import React from "react";
import { motion } from "framer-motion";

const images = {
  img1: "https://ichef.bbci.co.uk/news/1536/cpsprodpb/4F9B/production/_118697302_crypto.png.webp",
};

const HeroSlide = () => {
  return (
    <div className="fixed inset-0 w-screen h-screen overflow-hidden z-0">
      <motion.div
        className="absolute inset-0 will-change-transform"
        animate={{
          y: [0, -15, 0, 5, 0],
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      >
        <img
          src={images.img1}
          alt="Dancing illustration 1"
          className="w-screen h-screen object-cover opacity-75"
        />
      </motion.div>
    </div>
  );
};

export default HeroSlide;
