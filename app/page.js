import Image from "next/image";
import Hero from "./components/Hero";
import {
  ServicesSection,
  AboutSection,
  ContactSection,
  FAQSection,
} from "./components";

export const metadata = {
  title: "UK Web Developers | Lukalink Web Development",
  description: "Lukalink is a UK-based Web Development Agency specialising in web design, SEO, digital marketing, and software development.",
};

export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      <Hero />
      <ServicesSection />
      <AboutSection />
      <FAQSection />
      <ContactSection />
    </div>
  );
}
