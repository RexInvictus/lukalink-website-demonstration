"use client";
import { motion } from "framer-motion";
import React from "react";
import Link from "next/link";

const LargeCard = ({
  title,
  heading,
  description,
  buttonText,
  backgroundImage,
  imageLeft,
  href,
}) => {
  return (
    <motion.div
      className="bg-white rounded-lg w-full mt-5 shadow-lg flex flex-wrap"
      initial={{ x: imageLeft ? "-5px" : "5px", opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      viewport={{ once: true }}
    >
      {imageLeft && (
        <div
          className="h-full w-full md:w-1/2 bg-cover bg-fixed max-md:hidden"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        ></div>
      )}
      <div className="h-full w-full md:w-1/2 p-12 flex flex-col items-center">
        <p className="font-semibold text-blue-ll text-center text-lg">
          {title}
        </p>
        <h1 className="font-bold tracking-tighter text-center text-6xl">
          {heading}
        </h1>
        <p className="opacity-60 tracking-wide text-xl text-center mt-2">
          {description}
        </p>
        <Link
          href={href}
          className="mt-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-700"
        >
          {buttonText}
        </Link>
      </div>
      {!imageLeft && backgroundImage != "" && (
        <div
          className="h-full w-full md:w-1/2 bg-cover bg-fixed max-md:hidden"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        ></div>
      )}
      {backgroundImage == "" && (
        <div className="h-full w-full md:w-1/2 p-10 flex flex-col items-center max-md:hidden">
          <p className="font-semibold text-blue-ll text-center text-lg">
            Software Development
          </p>
          <h1 className="font-bold text-center text-6xl">Mobile Apps</h1>
          <p className="opacity-50 text-lg text-center mt-2"></p>
          <Link
            href="/services/service/mobile-apps"
            className="mt-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-700"
          >
            {buttonText}
          </Link>
        </div>
      )}
    </motion.div>
  );
};

export default LargeCard;
