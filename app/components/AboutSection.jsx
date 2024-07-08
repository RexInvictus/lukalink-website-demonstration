"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const AboutSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/blog.webp",
      caption: "Modestas Travels | Hiking Blog",
      link: "/blog/case-studies/modestas-travels",
    },
    {
      image: "/simply-chat.webp",
      caption: "SimplyChat | Chat App",
      link: "/blog/case-studies/simply-chat",
    },
    {
      image: "/lingua.webp",
      caption: "Lingua Interpreting & Translations",
      link: "/blog/case-studies/lingua-interpreting",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="bg-[#091329] md:bg-about md:bg-cover py-32 text-white">
      <motion.div
        className="container mx-auto px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col md:flex-row  items-center justify-between">
          <div className="md:w-1/2 relative">
            <div className="relative h-[500px] w-full max-md:hidden">
              <Image
                src={slides[currentSlide].image}
                alt={slides[currentSlide].caption}
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 flex items-center justify-between">
                <button
                  onClick={prevSlide}
                  className="bg-black bg-opacity-80 text-white px-4 py-2 rounded-full ml-4"
                >
                  &lt;
                </button>
                <button
                  onClick={nextSlide}
                  className="bg-black bg-opacity-80 text-white px-4 py-2 rounded-full mr-4"
                >
                  &gt;
                </button>
              </div>
              <div className="absolute bottom-0 bg-gray-800 bg-opacity-80 text-white p-4 w-full text-center">
                <p className="text-2xl font-bold tracking-tight">
                  {slides[currentSlide].caption}
                </p>
                {/* <a
                  href={slides[currentSlide].link}
                  className="mt-2 inline-block font-bold bg-orange-grad text-white px-4 py-2 rounded"
                >
                  Read Case Study
                </a> */}
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-12 mt-8 md:mt-0">
            <h2 className="text-6xl font-bold mb-6">Our Work</h2>
            <p className="text-2xl mb-4">
              Established in 2023, we are proud to have worked with a number of
              clients on a variety of projects.
            </p>
            <p className="text-2xl mb-4">
              Our services have ranged from web apps, blogs, business websites,
              and a full-stack mobile applications built for both iOS and
              Android.
            </p>
            <p className="text-2xl mb-7">
              Additionally, we have created and managed clients&#39; automated
              email marketing campaigns, which have produced significant
              results.
            </p>
            {/* <a
              href={slides[currentSlide].link}
              className="border-2 border-l-0 border-transparent py-3 px-6 rounded-sm font-semibold uppercase tracking-wide bg-text-grad text-off-white hover:bg-orange-grad transition-all duration-300 ease-in-out"
            >
              VIEW PORTFOLIO
            </a> */}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
