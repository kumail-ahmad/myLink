import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
const poppins = 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap';
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Palm-Link",
  description: "Generated by Kumail Ahmad",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href={poppins} rel="stylesheet" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-poppins bg-customGreen`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
