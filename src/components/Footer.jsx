import React from "react";
import { motion } from "framer-motion";
import { FaDiscord, FaTwitter, FaShip } from "react-icons/fa";
import foot from "../asstes/foot.svg";

const Footer = () => {
  return (
    <motion.footer
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
      className="fixed bottom-0 left-0 right-0 p-4 md:p-6 z-50"
    >
      <div className=" mx-auto  rounded-2xl p-2 flex justify-between items-center shadow-lg">
        <div className="flex space-x-2">
          <button className="w-10 h-10 text-gray-200 rounded-full flex items-center justify-center bg-blue-600 hover:bg-blue-500 transition-colors">
            <FaDiscord size={20} />
          </button>
          <button className="w-10 h-10 text-gray-200 rounded-full flex items-center justify-center bg-blue-600 hover:bg-blue-500 transition-colors">
            <FaShip size={20} />
          </button>
          <button className="w-10 h-10 text-gray-200 rounded-full flex items-center justify-center bg-blue-600 hover:bg-blue-300 transition-colors">
            <FaTwitter size={20} />
          </button>
        </div>
        <button className=" text-white mt-3">
          view collection
          <img
            className="xl:w-[230px] w-[180px] absolute bottom-[-50px] right-[-10px] z-[-1]"
            src={foot}
            alt="view collection"
          />
        </button>
      </div>
    </motion.footer>
  );
};

export default Footer;
