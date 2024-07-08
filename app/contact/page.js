import { Navbar } from "../components";
import Link from "next/link";
import ContactPageSection from "../components/ContactPageSection";

export const metadata = {
  title: "Contact Us | Lukalink Web Development",
  description:
    "Contact page for Lukalink, a software development and digital marketing.",
};

export default function Contact() {
  return (
    <div className="bg-off-white text-plex-sans">
      <Navbar showCalcQuote={false} />
      <div className="w-1/2 max-md:w-4/5 z-10 2xl:w-1/2 md:w-3/4 max-breakpoint:w-full mt-20 m-auto py-10">
        <h2 className="font-semibold opacity-50 tracking-wide uppercase text-xl">
          Lukalink{" "}
        </h2>
        <h1 className="text-8xl font-bold -ml-1 mt-1 tracking-tighter">
          Contact <span className="text-blue-ll">Us</span>
        </h1>
        <p className="opacity-50 text-xl mb-6 w-3/4">
          Fill out the contact form below and we will get back to you. <br />
          Alternatively, email us at{" "}
          <Link href="mailto:info@lukalink.co.uk" className="text-blue-500">
            info@lukalink.co.uk
          </Link>{" "}
          or call us on +447867611349.
        </p>
        <ContactPageSection />
      </div>
    </div>
  );
}
