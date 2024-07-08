"use client";
import { FAQ_DATA } from "../constants";
import { useState } from "react";
import { motion } from "framer-motion";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full py-12 bg-off-white">
      <motion.div
        className="w-1/2 max-md:w-4/5 z-10 2xl:w-3/4 md:w-3/4 max-breakpoint:w-full m-auto rounded-md px-6 pb-6 pt-3"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <h2 className="text-6xl font-bold text-left mb-8">FAQs</h2>
        <div className="space-y-4">
          {FAQ_DATA.map((faq, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-4">
              <button
                className="w-full text-left flex justify-between items-center text-xl font-semibold"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span>{activeIndex === index ? "-" : "+"}</span>
              </button>
              {activeIndex === index && (
                <div className="mt-4 text-gray-700">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default FAQSection;
