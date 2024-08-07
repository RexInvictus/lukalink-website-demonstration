import "./globals.css";
import { Navbar, Footer } from "./components";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-plex-sans">
        {children}
        <Footer  />
      </body>
    </html>
  );
}
