import { ContactSection, Navbar } from "@/app/components";
import ContactForm from "@/app/components/ContactForm";
import Link from "next/link";

export const metadata = {
    title: "Mobile App Developers | Lukalink Web Development",
    description: "At Lukalink we develop high-grade, scalable, full-stack mobile apps for your business needs.",
  };
  

export default function MobileApps() {
  return (
    <div className="bg-flipped bg-cover text-plex-sans">
      <Navbar showCalcQuote={false} />
      <div className="w-1/2 max-md:w-4/5 z-10 2xl:w-1/2 md:w-3/4 max-breakpoint:w-full mt-20 m-auto py-10">
        <h2 className="font-semibold opacity-50 tracking-wide uppercase text-xl">
          Lukalink{" "}
        </h2>
        <h1 className="text-7xl font-bold -ml-1 mt-1 tracking-tighter">
          Mobile <span className="text-blue-ll">Apps</span>
        </h1>
      </div>
      <div className="w-full bg-off-white m-auto">
        <div className="w-1/2 max-md:w-4/5 z-10 2xl:w-1/2 md:w-3/4 m-auto pt-2">
          <section className="py-10">
            <p className="mb-5 text-2xl">
              We specialize in creating scalable, secure, and high-performing
              mobile apps tailored to your business needs.
            </p>

            <h2 className="font-bold text-3xl">
              What does the process look like?
            </h2>
            <p className="mb-5 text-2xl">
              We begin with a detailed consultation to understand your project
              requirements, including the specific features and functionalities
              you need. This helps us create a project plan and timeline that
              aligns with your goals.
            </p>
            <p className="mb-5 text-2xl">
              Once the plan is approved, we move into the design and development
              phase. Throughout this phase, we keep you updated with regular
              progress reports and incorporate your feedback to ensure the final
              product meets your expectations.
            </p>
            <p className="mb-5 text-2xl">
              After development is complete, we conduct thorough testing to
              ensure the app is bug-free and performs well. We also provide
              ongoing maintenance and support to keep your app running smoothly.
            </p>
            <h2 className="font-bold text-3xl">
              What are some of the included features?
            </h2>
            <ul className="list-disc list-inside my-5 text-2xl">
              <li>Custom functionality and integrations</li>
              <li>Responsive and user-centric design</li>
              <li>Robust backend development</li>
              <li>API development and integration</li>
              <li>Ongoing maintenance and support</li>
              <li>High security standards</li>
            </ul>
            <p>
              <Link href="/contact" className="text-blue-ll underline">
                Reach out
              </Link>{" "}
              and let&#39;s get started.
            </p>
          </section>
        </div>
      </div>
      <div className="flex flex-col items-center py-12 justify-center w-1/2 max-md:w-4/5 z-10 2xl:w-1/2 md:w-3/4 m-auto">
        <div className="w-3/4">
          <h1 className="text-left text-blue-ll text-6xl font-bold -ml-1 mt-1 tracking-tighter">
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
