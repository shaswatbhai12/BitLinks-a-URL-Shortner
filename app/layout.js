import { Geist, Geist_Mono } from "next/font/google"; // Using Google fonts completely
import "./globals.css";
import Navbar from "@/components/Navbar";

// Fixed: Changed localFont to Geist
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Fixed: Corrected typos in title and description
export const metadata = {
  title: "BitLinks - Your Trusted URL Shortener",
  description: "Bitlinks helps you shorten your URLs easily",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased bg-purple-50`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar/>
        {children}
      </body>
    </html>
  );
}