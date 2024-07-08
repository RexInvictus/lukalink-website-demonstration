"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { DROPDOWN_ITEMS } from "../constants";
import QuoteCalculator from "./QuoteCalculator";

const Navbar = ({ showCalcQuote = true }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="select-none w-full font-plex-sans z-20 relative bg-gray-600 max-md:bg-white bg-opacity-50 max-md:bg-opacity-100 text-off-white shadow-md">
      <nav className="w-1/2 max-md:w-4/5 z-10 2xl:w-1/2 md:w-3/4 max-breakpoint:w-full m-auto rounded-md rounded-t-none px-6 pb-0 pt-3">
        <div className="flex justify-between max-md:hidden pb-6">
          <div></div>
          <div className="flex">
            <Image
              src="/phone.svg"
              alt="Phone"
              height={20}
              width={20}
              className="mx-2 select-text"
            />
            <p className="mr-6">+447867611349</p>
            <Image
              src="/email.svg"
              height={20}
              width={20}
              className="mx-2"
              alt="email"
            />
            <a
              href="mailto:info@lukalink.co.uk"
              className="text-blue-500 select-text"
            >
              info@lukalink.co.uk
            </a>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="pb-6 -ml-5 border-blue-ll border-b-2 max-breakpoint:border-none"
          >
            <Image
              src="/ll.svg"
              alt="logo"
              width={100}
              height={100}
              className=""
            />
          </Link>
          <ul className="flex gap-2 max-breakpoint:hidden cursor-pointer text-nowrap">
            {[
              { name: "Our Services", href: "/services" },
              { name: "About Us", href: "/about" },
              { name: "Contact", href: "/contact" },
              // { name: "Blog", href: "/blog" },
            ].map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="relative transition ease-in-out delay-[10ms] duration-300 w-28 border-b-2 border-transparent hover:border-blue-ll pb-6 text-center"
              >
                <li>
                  <div className="flex gap-1 items-center justify-center font-bold">
                    <p>{item.name}</p>
                  </div>
                </li>
              </Link>
            ))}
          </ul>
          <Image
            src="/bars.svg"
            alt="menu icon"
            width={40}
            height={40}
            className="hidden max-breakpoint:block pb-6 cursor-pointer"
            onClick={handleMobileMenuToggle}
          />
          <div className="mb-0 max-breakpoint:hidden pb-2 -mt-3">
            <button
              className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-3 rounded-lg bg-text-grad text-white shadow-md shadow-black/10 hover:shadow-lg hover:shadow-black/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none mb-0"
              type="button"
              onClick={handleModalOpen}
            >
              <Image
                src="/calculator-white.svg"
                width={25}
                height={25}
                alt="calculator"
              />
            </button>
            {showCalcQuote && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="absolute top-full text-orange-ll opacity-80 shadow-lg rounded-md z-20 animate-pulse"
              >
                <Image
                  src="/squiggle.svg"
                  height={50}
                  width={50}
                  className="opacity-50"
                  alt="squiggle"
                />
                <p className="font-cursive leading-tight tracking-tighter">
                  click here to estimate quote!
                </p>
              </motion.div>
            )}
          </div>
        </div>
        {isMobileMenuOpen && (
          <div
            ref={mobileMenuRef}
            className="max-breakpoint:block absolute top-full left-0 right-0 bg-text-grad shadow-md rounded-md z-20"
          >
            <ul className="flex flex-col gap-2 p-4">
              {[
                { name: "Our Services", href: "/services" },
                { name: "About Us", href: "/about" },
                { name: "Contact", href: "/contact" },
                // { name: "Blog", href: "/blog" },
              ].map((item, index) => (
                <Link
                  key={index}
                  className="relative transition ease-in-out delay-[10ms] duration-300 border-b-2 border-transparent hover:border-blue-ll pb-6 text-center"
                  href={item.href}
                >
                  <div className="flex gap-1 items-center justify-center font-bold">
                    <p>{item.name}</p>
                  </div>
                </Link>
              ))}
            </ul>
          </div>
        )}
      </nav>
      {isModalOpen && <QuoteCalculator onClose={handleModalClose} />}
    </header>
  );
};

export default Navbar;
