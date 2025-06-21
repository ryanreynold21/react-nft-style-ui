import React from "react";
import { motion } from "framer-motion";

const LoadingScreen = () => {
  return (
    <motion.div
      className="fixed inset-0 bg-white z-[100] flex flex-col items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <h1 className="text-4xl font-bold text-gray-800 tracking-tighter font-udmarugo">
        Fluffy HUGS
      </h1>
      <motion.div
        className="mt-4 text-gray-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        Loading your friends...
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;
