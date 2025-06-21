import React from "react";
import { motion } from "framer-motion";

const storyPoints = [
  { id: 1, text: "Once upon a time, in a world of pixels and code..." },
  { id: 2, text: "Lived a collection of the cutest, fluffiest creatures." },
  { id: 3, text: "They waited for new friends to come and play." },
  { id: 4, text: "And that's when you arrived!" },
];

const textVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, 0.05, -0.01, 0.9],
    },
  },
};

const StorySlide = () => {
  return (
    <section className="min-h-screen w-full bg-white/50 backdrop-blur-md py-20 px-8 flex flex-col justify-center items-center space-y-12 text-center">
      {storyPoints.map((point) => (
        <motion.p
          key={point.id}
          className="text-3xl md:text-5xl font-bold text-gray-700 max-w-3xl"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          {point.text}
        </motion.p>
      ))}
    </section>
  );
};

export default StorySlide;
