"use client";

import { motion } from "framer-motion";

const AnimatedText = ({ text }) => {
  const textSplit = text.split("");
  return (
    <>
      <p className="sr-only">{text}</p>
      {textSplit.map((el, i) => (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.05, delay: i / 20 }}
          key={i}
          aria-hidden
        >
          {el}
        </motion.span>
      ))}
    </>
  );
};

export default AnimatedText;
