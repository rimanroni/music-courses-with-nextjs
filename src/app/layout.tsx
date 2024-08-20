import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Learn  Next JS With Projects ",
  description: "Start Project with Typescript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
       <div className="w-full flex relative justify-center items-center">
       <Navbar/>
       </div>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
