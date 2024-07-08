import { ContactSection, Navbar } from "@/app/components";
import ContactForm from "@/app/components/ContactForm";
import Link from "next/link";

export const metadata = {
    title: "Digital Marketing Solutions | Lukalink Web Development",
    description: "At Lukalink we specialise in custom, effective digital marketing solutions.",
  };
  

export default function DigitalMarketing() {
  return (
    <div className="bg-flipped bg-cover text-plex-sans">
      <Navbar showCalcQuote={false} />
      <div className="w-1/2 max-md:w-4/5 z-10 2xl:w-1/2 md:w-3/4 max-breakpoint:w-full mt-20 m-auto py-10">
        <h2 className="font-semibold opacity-50 tracking-wide uppercase text-xl">
          Lukalink{" "}
        </h2>
        <h1 className="text-7xl font-bold -ml-1 mt-1 tracking-tighter">
          Digital <span className="text-blue-ll">Marketing</span>
        </h1>
      </div>
      <div className="w-full bg-off-white m-auto">
        <div className="w-1/2 max-md:w-4/5 z-10 2xl:w-1/2 md:w-3/4 m-auto pt-2">
          <section className="py-10">
            <p className="mb-5 text-2xl">
              Our digital marketing services are designed to boost your online
              presence and engage your audience effectively through various
              channels.
            </p>

            <h2 className="font-bold text-3xl">
              What do our services include?
            </h2>
            <p className="mb-5 text-2xl">
              We offer automated SMS marketing and automated email marketing
              solutions to reach your audience directly and efficiently.
            </p>
            <p className="mb-5 text-2xl">
              Our SEO services ensure your website ranks higher in search engine
              results, driving organic traffic and enhancing visibility.
            </p>
            <p className="mb-5 text-2xl">
              We manage content for your social media platforms and website,
              ensuring consistent and engaging posts that resonate with your
              audience.
            </p>
            <h2 className="font-bold text-3xl">
              What are some of the benefits?
            </h2>
            <ul className="list-disc list-inside my-5 text-2xl">
              <li>Effective automated SMS and email marketing campaigns</li>
              <li>Improved website visibility through SEO</li>
              <li>Engaging content management for social media and websites</li>
              <li>Increased brand awareness and customer engagement</li>
              <li>Analytics and reporting to measure campaign success</li>
            </ul>
            <p>
              <Link href="/contact" className="text-blue-ll underline">
                Contact us
              </Link>{" "}
              today to discuss how we can enhance your digital presence.
            </p>
          </section>
        </div>
      </div>
      <div className="flex flex-col items-center py-12 justify-center w-1/2 max-md:w-4/5 z-10 2xl:w-1/2 md:w-3/4 m-auto">
        <div className="w-3/4">
          <h1 className="text-left text-6xl text-blue-ll font-bold -ml-1 mt-1 tracking-tighter">
            Contact Us
          </h1>
        </div>
        <ContactForm />
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}
