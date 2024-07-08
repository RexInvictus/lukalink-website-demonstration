import { Navbar, SmallCard } from "../components";
import Link from "next/link";
import { LargeCard } from "../components";

export default function Services() {
  return (
    <div className="bg-off-white text-plex-sans">
      <Navbar showCalcQuote={false} />
      <div className="w-1/2 max-md:w-4/5 z-10 2xl:w-1/2 md:w-3/4 max-breakpoint:w-full mt-20 m-auto py-10">
        <h2 className="font-semibold opacity-50 tracking-wide uppercase text-xl">
          Lukalink{" "}
        </h2>
        <h1 className="text-7xl font-bold -ml-1 mt-1 tracking-tighter">
          Our <span className="text-blue-ll">Services</span>
        </h1>
        <p className="opacity-50 text-2xl mt-3 mb-6 leading-tight">
          We provide <span className="font-bold">web design</span>,{" "}
          <span className="font-bold">web & mobile app development</span>,{" "}
          <span className="font-bold">custom software development</span>,{" "}
          <span className="font-bold">web hosting</span>,{" "}
          <span className="font-bold">SEO</span>, and{" "}
          <span className="font-bold">digital marketing services</span> for our
          clients. <br />
          <Link href="/contact" className="text-blue-900 font-bold">
            Contact us
          </Link>{" "}
          today to enquire.{" "}
        </p>
        <div className="flex flex-wrap">
          <LargeCard
            title="Web Design"
            heading="Business Websites"
            description="We create stunning, fast-loading, responsive, SEO-optimized business websites with a focus on high quality design, great user experience, and lead generation. Our team has the skills and experience to create a business website you can be proud of."
            buttonText="Learn More"
            backgroundImage="/business-website.webp"
            imageLeft={false}
            href="/services/service/business-websites"
          />
          <LargeCard
            title="Web Design"
            heading="E-commerce Solutions"
            description="We create custom-made online retail stores so you can focus on running your business. Stand out from the competition with a unqiue design, backed by our team of professionals who will be there to assist you every step of the way."
            buttonText="Learn More"
            backgroundImage="/ecommerce.webp"
            imageLeft={true}
            href="/services/service/e-commerce"
          />
          <LargeCard
            title="Web Design"
            heading="Web Apps"
            description=""
            buttonText="Learn More"
            backgroundImage=""
            imageLeft={false}
            href="/services/service/web-apps"
          />
          <div className="flex flex-wrap gap-2">
            <SmallCard
              subtitle="Web Management"
              title="Web Hosting"
              description="As part of our Web Design services, we provide fully-managed web hosting for a monthly rate. This includes keeping your website online, monitoring for security purposes, and scaling your servers as traffic to your site grows."
            />
            <SmallCard
              subtitle="Web Management"
              title="Domain Management"
              description="As part of our Web Design services, we can register your domain, link it to your website, and create a free business email you@yourdomain.com."
            />
          </div>
          <LargeCard
            title="Digital Marketing"
            heading="Digital Marketing and SEO"
            backgroundImage="/digital-marketing.webp"
            imageLeft={true}
            buttonText="Learn More"
            description=""
            href="/services/service/digital-marketing"
          />
        </div>
      </div>
    </div>
  );
}
