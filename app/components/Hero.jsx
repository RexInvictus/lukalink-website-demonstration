import React from "react";
import Image from "next/image";
import { Navbar, HeroContent } from ".";

const Hero = () => {
  return (
    <div className="h-screen">
      <div className="relative bg-fixed w-full h-full max-md:h-screen bg-image2 bg-cover bg-center">
        <HeroContent />
        {/* Navbar */}
        <Navbar />
      </div>
      {/* Arrow */}
      <Image
        src="/arrow-down.svg"
        alt="arrow"
        width={30}
        height={30}
        className="animate-bounce absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10 opacity-30"
      />
    </div>
  );
};

export default Hero;
