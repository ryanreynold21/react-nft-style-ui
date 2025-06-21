import React from "react";
import { motion } from "framer-motion";

const cardData = [
  {
    id: 1,
    title: "Cute Cat",
    image:
      "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    id: 2,
    title: "Fluffy Dog",
    image:
      "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    id: 3,
    title: "Happy Rabbit",
    image:
      "https://images.pexels.com/photos/4001296/pexels-photo-4001296.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    id: 4,
    title: "Playful Parrot",
    image:
      "https://images.pexels.com/photos/1040424/pexels-photo-1040424.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const CardSlide = () => {
  return (
    <section className="min-h-screen w-full bg-white backdrop-blur-md py-20 px-4 flex items-center">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 w-full"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {cardData.map((card) => (
            <motion.div
              key={card.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              variants={cardVariants}
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-32 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg text-gray-800">
                  {card.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CardSlide;
