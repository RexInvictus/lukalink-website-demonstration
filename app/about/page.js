import { Navbar } from "../components";
import Link from "next/link";

export const metadata = {
  title: "About Us | Lukalink Web Development",
  description: "About page for Lukalink, a web design, software development, and digital marketing agency based in Leeds, United Kingdom.",
};


export default function About() {
  return (
    <div className="bg-off-white text-plex-sans">
      <Navbar showCalcQuote={false} />
      <div className="w-1/2 max-md:w-4/5 z-10 2xl:w-1/2 md:w-3/4 max-breakpoint:w-full mt-20 m-auto py-10">
        <h2 className="font-semibold opacity-50 tracking-wide uppercase text-xl">
          Lukalink{" "}
        </h2>
        <h1 className="text-7xl font-bold -ml-1 mt-1 tracking-tighter">
          About <span className="text-blue-ll">Us</span>
        </h1>
        <p className="opacity-50 text-4xl mt-3 mb-6 ">
          Lukalink is a digital agency based in Yorkshire, Leeds, United
          Kingdom. We provide digital marketing and software solutions to
          businesses. Our services include website design, web hosting and
          management, web and mobile app development, e-commerce solutions, and
          digital marketing. You can read more about what we do{" "}
          <Link href="/services" className="text-blue-500 font-bold">
            here.
          </Link>
        </p>
      </div>
    </div>
  );
}
