import React from "react";
import { FaRegFileLines } from "react-icons/fa6";
import { motion } from "framer-motion";

function Card({reference}) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale: 1.1}} className="relative w-60 h-80 bg-zinc-900/90 text-white rounded-[25px] p-8 m-2 overflow-hidden">
      <FaRegFileLines />
      <p className="text-sm mt-3">Lorem ipsum dolor sit amet consectetur.</p>
      <div className="absolute bottom-0 bg-blue-400 w-full h-[45px] left-0"></div>
      data tag
    </motion.div>
  );
}

export default Card;
