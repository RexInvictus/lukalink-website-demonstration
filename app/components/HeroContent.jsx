"use client";
import { AnimatedText } from ".";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
const HeroContent = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="absolute inset-0 max-sm:-mb-20 flex items-center justify-center text-off-white font-plex-sans"
    >
      <div className=" max-md:w-4/5  z-10 w-1/2 2xl:w-1/2 md:w-3/4">
        <h1 className="text-6xl max-sm:text-4xl font-bold leading-tight mb-4 tracking-tight">
          Bespoke{" "}
          <span className="bg-orange-grad text-transparent bg-clip-text">
            <AnimatedText text="digital marketing" />
          </span>{" "}
          and{" "}
          <span className="bg-text-grad text-transparent bg-clip-text">
            <AnimatedText text="software solutions" />
          </span>{" "}
          for your business
        </h1>
        <p className="text-lg m-auto md:text-xl max-sm:text-base opacity-80">
          We are a UK-based agency providing web design, SEO, digital marketing,
          and custom software development for our clients. Contact us today for
          a free consultation.
        </p>
        <div className="mb-6 gap-3 -ml-3 flex items-center">
          {/* Display 5 stars for Google reviews */}
          <a
            className="opacity-80 flex items-center mb-1 w-fit p-3"
            href="https://maps.app.goo.gl/6AE831uQKPQx96c9A"
            target="_blank"
          >
            <Image
              src="/google.svg"
              width={20}
              height={20}
              className="mr-2"
              alt="Google logo"
            />
            <span className="text-yellow-500 flex text-center">
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  className="h-3 w-5 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21L12 17.77L5.82 21L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
              ))}
            </span>
          </a>
          <a
            className="bg-white text-black flex items-center gap-3 border opacity-50 border-gray-300 rounded-sm"
            href="https://uk.trustpilot.com/review/lukalink.co.uk"
            target="_blank"
          >
            <Image
              src="/trustpilot-1.svg"
              alt="Trustpilot"
              height={50}
              width={100}
              className="mr-2"
            />
          </a>
        </div>
        <div className="flex gap-5 font-plex-sans text-nowrap flex-wrap max-sm:text-sm">
          <Link
            href="/services"
            className="bg-transparent text-off-white border-2 border-off-white py-3 px-6 rounded-sm font-semibold uppercase tracking-wide transition-all duration-300 ease-in-out hover:bg-gray-300 hover:text-black hover:border-gray-300"
          >
            OUR SERVICES
          </Link>
          <Link
            href="/contact"
            className="border-2 border-transparent py-3 px-6 rounded-sm font-semibold uppercase tracking-wide bg-text-grad text-off-white hover:bg-orange-grad transition-all duration-300 ease-in-out"
          >
            BOOK A FREE CONSULTATION
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroContent;
