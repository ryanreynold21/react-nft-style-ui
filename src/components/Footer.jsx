import React from "react";
import { motion } from "framer-motion";
import { FaDiscord, FaTwitter, FaShip } from "react-icons/fa";

const Footer = () => {
  return (
    <motion.footer
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
      className="fixed bottom-0 left-0 right-0 p-4 md:p-6 z-50"
    >
      <div className="max-w-md mx-auto bg-white/70 backdrop-blur-md rounded-2xl p-2 flex justify-between items-center shadow-lg">
        <div className="flex space-x-2">
          <button className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-300 transition-colors">
            <FaDiscord size={20} />
          </button>
          <button className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-300 transition-colors">
            <FaShip size={20} />
          </button>
          <button className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-300 transition-colors">
            <FaTwitter size={20} />
          </button>
        </div>
        <button className="bg-gray-900 text-white font-semibold py-2 px-6 rounded-full hover:bg-gray-700 transition-colors">
          view collection
        </button>
      </div>
    </motion.footer>
  );
};

export default Footer;
