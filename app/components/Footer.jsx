import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#091329] text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between w-1/2 max-md:w-4/5 z-10 2xl:w-1/2 md:w-3/4 max-breakpoint:w-full m-auto rounded-md rounded-t-none px-6 pb-0 pt-3 gap-10">
          <div className="mb-6 md:mb-0">
            <h5 className="font-bold mb-4">Quick Links</h5>
            <ul>
              <li className="mb-2">
                <Link href="/" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-white"
                >
                  Services
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white"
                >
                  Contact
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/sitemap-0.xml"
                  className="text-gray-400 hover:text-white"
                >
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>
          <div className="mb-6 md:mb-0 ">
            <h5 className="font-bold mb-4">Contact Details</h5>
            <p className="text-gray-400">Green Lea, Leeds, United Kingdom</p>
            <p className="text-gray-400">Email: info@lukalink.co.uk</p>
            <p className="text-gray-400">Phone: +447867611349</p>
          </div>
          <div className="mb-6 md:mb-0">
            <h5 className="font-bold mb-4">Follow Us</h5>
            <div className="flex space-x-4">
              <Link
                href="https://facebook.com"
                className="text-gray-400 hover:text-white"
              >
                <Image
                  src="/facebook.svg"
                  alt="Facebook"
                  width={30}
                  height={30}
                />
              </Link>
              <Link
                href="https://twitter.com"
                className="text-gray-400 hover:text-white"
              >
                <Image
                  src="/twitter.svg"
                  alt="Twitter"
                  width={30}
                  height={30}
                />
              </Link>
              <Link
                href="https://instagram.com"
                className="text-gray-400 hover:text-white"
              >
                <Image
                  src="/instagram.svg"
                  alt="Instagram"
                  width={30}
                  height={30}
                />
              </Link>
              <Link
                href="https://linkedin.com"
                className="text-gray-400 hover:text-white"
              >
                <Image
                  src="/linkedin.svg"
                  alt="LinkedIn"
                  width={30}
                  height={30}
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-6 text-center text-gray-400">
          &copy; 2024 Lukalink. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
