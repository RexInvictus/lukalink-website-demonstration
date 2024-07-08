/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        breakpoint: "1060px",
      },
      colors: {
        "blue-ll": "#256EFF",
        "orange-ll": "#f5b460",
        "off-white": "#f3f0ec",
      },
      backgroundImage: {
        "grad-off-white":
          "linear-gradient(90deg, hsla(220, 100%, 57%, 1) 0%, hsla(220, 100%, 50%, 1) 50%, hsla(220, 100%, 42%, 1) 100%)",
        "text-grad":
          "linear-gradient(90deg, hsla(220, 100%, 57%, 1) 0%, hsla(220, 80%, 54%, 1) 50%, hsla(220, 82%, 34%, 1) 100%)",
        image2: "url('/blurrednew.webp')",
        bs: "url('/business-website.webp')",
        about: "url('/about-inverted.webp')",
        flipped: "url('/about-flipped.webp')",
        "orange-grad":
          "linear-gradient(90deg, hsla(34, 88%, 67%, 1) 0%, hsla(34, 100%, 50%, 1) 100%)",
      },
      fontFamily: {
        "plex-sans": ['"IBM Plex Sans"', "sans"],
        inter: ['"Inter"', "sans"],
        source: ["Source Sans 3", "sans-serif"],
        digital: ["Orbitron", "mono"],
        cursive: ["Playwrite PL", "sans"],
      },
    },
  },
  plugins: [],
};
