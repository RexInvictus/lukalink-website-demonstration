"use client";
import { motion } from "framer-motion";
const SmallCard = ({ subtitle, title, description }) => {
  return (
    <motion.div
      className="bg-white rounded-lg mt-5 w-1/2 p-10 shadow-lg flex-1"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      viewport={{ once: true }}
    >
      <p className="font-semibold text-orange-ll text-center text-md">
        {subtitle}
      </p>
      <h1 className="font-bold text-center text-4xl tracking-tighter">{title}</h1>
      <p className="opacity-50 text-md text-center mt-2">{description}</p>
    </motion.div>
  );
};

export default SmallCard;
