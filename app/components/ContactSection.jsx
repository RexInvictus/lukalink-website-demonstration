"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { DROPDOWN_ITEMS } from "../constants";
import Link from "next/link";
import ContactForm from "./ContactForm";

const ContactSection = () => {
 
  return (
    <section className="bg-flipped bg-cover bg-center py-20 text-black">
      <motion.div
        className="container mx-auto px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center flex-col">
          <div className="w-3/4">
            <h1 className="text-left text-6xl font-bold -ml-1 mt-1 tracking-tighter mb-6">
              Contact Us
            </h1>
          </div>
          <ContactForm />
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
