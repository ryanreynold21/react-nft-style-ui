import React from "react";
import { motion } from "framer-motion";

const images = {
  img1: "https://ichef.bbci.co.uk/news/1536/cpsprodpb/017B/production/_118697300_kimcatdardshian_eth.png.webp",
  img2: "https://ichef.bbci.co.uk/news/1536/cpsprodpb/4F9B/production/_118697302_crypto.png.webp",
};

const HeroSlide = () => {
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden z-0">
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          y: [0, -15, 0, 5, 0],
        }}
        transition={{
          duration: 12,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      >
        <img
          src={images.img1}
          alt="Dancing illustration 1"
          className="w-full h-full object-cover opacity-75"
        />
      </motion.div>
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          y: [0, 10, -5, 10, 0],
        }}
        transition={{
          duration: 15,
          ease: "easeInOut",
          repeat: Infinity,
          delay: 0.5,
        }}
      >
        <img
          src={images.img2}
          alt="Dancing illustration 2"
          className="w-full h-full object-cover opacity-75"
        />
      </motion.div>
    </div>
  );
};

export default HeroSlide;
