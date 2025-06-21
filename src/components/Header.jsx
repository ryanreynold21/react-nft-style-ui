import React from "react";
import { motion } from "framer-motion";
import head from "../asstes/head.svg";

const Header = () => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 p-6 xl:p-10 z-50"
    >
      <div className="">
        {/* <h1 className="text-3xl font-bold text-gray-800 tracking-tighter">
          Fluffy HUGS
        </h1> */}
        <img className="xl:w-[400px] w-[150px]" src={head} alt="logo" />
      </div>
    </motion.header>
  );
};

export default Header;
