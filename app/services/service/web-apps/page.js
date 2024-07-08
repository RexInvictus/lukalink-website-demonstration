import { ContactSection, Navbar } from "@/app/components";
import ContactForm from "@/app/components/ContactForm";
import Link from "next/link";

export const metadata = {
    title: "Web Apps | Lukalink Web Development",
    description: "At Lukalink we develop high-grade, scalable, full-stack web apps for your business needs.",
  };
  

export default function WebApps() {
  return (
    <div className="bg-flipped bg-cover text-plex-sans">
      <Navbar showCalcQuote={false} />
      <div className="w-1/2 max-md:w-4/5 z-10 2xl:w-1/2 md:w-3/4 max-breakpoint:w-full mt-20 m-auto py-10">
        <h2 className="font-semibold opacity-50 tracking-wide uppercase text-xl">
          Lukalink{" "}
        </h2>
        <h1 className="text-7xl font-bold -ml-1 mt-1 tracking-tighter">
          Web <span className="text-blue-ll">Apps</span>
        </h1>
      </div>
      <div className="w-full bg-off-white m-auto">
        <div className="w-1/2 max-md:w-4/5 z-10 2xl:w-1/2 md:w-3/4 m-auto pt-2">
          <section className="py-10">
            <p className="mb-5 text-2xl">
              We specialize in creating scalable, secure, and high-performing
              web apps tailored to your business needs.
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

// <section className="mt-10">
// <h1 className="text-4xl font-bold mb-5">Ecommerce</h1>
// <p className="mb-5 text-xl">
//   Boost your sales with a custom ecommerce website. We build
//   user-friendly online stores that make shopping a breeze for your
//   customers.
// </p>
// <p className="mb-5 text-xl">
//   Our ecommerce solutions are designed to be secure, scalable, and
//   easy to manage. From setting up secure payment gateways to
//   implementing product management systems, we handle all the technical
//   details so you can focus on growing your business.
// </p>
// <h2 className="font-bold text-2xl">
//   What does the process look like?
// </h2>
// <p className="mb-5 text-xl">
//   We start by understanding your specific needs and goals for your
//   ecommerce site. This involves discussing the products you offer,
//   your target audience, and any specific functionalities you require.
// </p>
// <p className="mb-5 text-xl">
//   Next, we create a tailored proposal outlining the scope of the
//   project, including a detailed quote and timeline. Once you approve
//   the proposal, we move into the design and development phase, where
//   we build your ecommerce site with regular updates and feedback
//   sessions.
// </p>
// <p className="mb-5 text-xl">
//   After the site is built, we provide training on how to manage your
//   store, from adding products to processing orders. We also offer
//   ongoing support and maintenance to ensure your site remains secure
//   and up-to-date.
// </p>
// <h2 className="font-bold text-2xl">
//   What are some of the included features?
// </h2>
// <ul className="list-disc list-inside my-5 text-xl">
//   <li>Secure and reliable payment gateways</li>
//   <li>Product management systems</li>
//   <li>SEO and marketing tools</li>
//   <li>Inventory management</li>
//   <li>Customer account management</li>
//   <li>Responsive and mobile-friendly designs</li>
// </ul>
// <p>
//   <Link href="/contact" className="text-blue-ll underline">
//     Get in touch
//   </Link>{" "}
//   to start your project today!
// </p>
// </section>
// <section className="mt-10">
// <h1 className="text-4xl font-bold mb-5">Web Apps</h1>
// <p className="mb-5 text-xl">
//   Transform your ideas into reality with custom web applications. We
//   specialize in creating scalable, secure, and high-performing web
//   apps tailored to your business needs.
// </p>
// <p className="mb-5 text-xl">
//   Our team has extensive experience in developing web applications
//   that provide exceptional user experiences and robust functionality.
//   Whether you need a simple web app or a complex, data-driven
//   application, we have the expertise to deliver.
// </p>
// <h2 className="font-bold text-2xl">
//   What does the process look like?
// </h2>
// <p className="mb-5 text-xl">
//   We begin with a detailed consultation to understand your project
//   requirements, including the specific features and functionalities
//   you need. This helps us create a project plan and timeline that
//   aligns with your goals.
// </p>
// <p className="mb-5 text-xl">
//   Once the plan is approved, we move into the design and development
//   phase. Throughout this phase, we keep you updated with regular
//   progress reports and incorporate your feedback to ensure the final
//   product meets your expectations.
// </p>
// <p className="mb-5 text-xl">
//   After development is complete, we conduct thorough testing to ensure
//   the app is bug-free and performs well. We also provide ongoing
//   maintenance and support to keep your app running smoothly.
// </p>
// <h2 className="font-bold text-2xl">
//   What are some of the included features?
// </h2>
// <ul className="list-disc list-inside my-5 text-xl">
//   <li>Custom functionality and integrations</li>
//   <li>Responsive and user-centric design</li>
//   <li>Robust backend development</li>
//   <li>API development and integration</li>
//   <li>Ongoing maintenance and support</li>
//   <li>High security standards</li>
// </ul>
// <p>
//   <Link href="/contact" className="text-blue-ll underline">
//     Reach out
//   </Link>{" "}
//   and let's get started.
// </p>
// </section>
