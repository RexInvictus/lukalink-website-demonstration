"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const ServicesSection = () => {
  const [selected, setSelected] = useState(0);

  const services = [
    {
      title: "Web Design",
      features: [
        "Custom UI/UX design",
        "Responsive layouts",
        "SEO optimization",
        "Pay monthly plans",
        "E-commerce solutions",
        "Web hosting",
      ],
    },
    {
      title: "Software Development",
      features: [
        "Custom business software",
        "Web app development",
        "Mobile app development",
        "Cross-platform development",
        "Cloud integration",
        "Maintenance and support",
      ],
    },
    {
      title: "Digital Marketing",
      features: [
        "SEO",
        "Pay-per-click advertising",
        "Social media marketing",
        "Content creation",
        "Automated SMS marketing",
        "Automated e-mail marketing",
      ],
    },
  ];

  return (
    <section className="bg-[#091329] z-10 select-none">
      <motion.div
        className=""
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true }}
      >
        <div className="max-md:w-full m-auto z-10 w-1/2 2xl:w-2/3 md:w-3/4 font-plex-sans text-off-white">
          <div className="grid grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                onClick={() => setSelected(index)}
                className={`flex flex-col justify-center items-center p-6 cursor-pointer ${
                  selected === index ? "bg-orange-grad" : ""
                }`}
              >
                <Image
                  src={`/${service.title.toLowerCase().replace(" ", "-")}.svg`}
                  height={50}
                  width={50}
                  alt="service"
                />
                <h1 className="font-semibold text-2xl text-center max-breakpoint:hidden">
                  {service.title}
                </h1>
              </div>
            ))}
          </div>
        </div>
        {/* Display selected service content */}
        <div className="w-full bg-off-white">
          <div className="max-md:w-full m-auto z-10 w-1/2 2xl:w-2/3 md:w-3/4 font-plex-sans rounded-lg p-6 text-black">
            <div className="-ml-4 p-10">
              <h2 className="text-4xl font-bold tracking-wide uppercase -ml-2 mb-1">
                {services[selected].title.split(" ").map((word, i) =>
                  i === 1 ? (
                    <span key={i} className="text-blue-ll">
                      {word}{" "}
                    </span>
                  ) : (
                    <span key={i}>{word} </span>
                  )
                )}
              </h2>
              <ul className="list-disc list-inside grid grid-cols-3 max-xl:grid-cols-2 max-sm:grid-cols-1 mt-6">
                {services[selected].features.map((feature, index) => (
                  <li key={index} className="text-2xl mb-2">
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-8 ">
                <Link
                  className="bg-blue-ll hover:bg-blue-800 text-white py-3 px-6 rounded-lg text-2xl"
                  href="/services"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ServicesSection;
