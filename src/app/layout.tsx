import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/Footer";
import BottomHeader from "@/components/header/BottomHeader";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Layout from "@/components/Layout";

const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Amazon clone",
  description: "An Amazon clone app.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Layout>
          <div className="bg-gray-300">
            <Header />
            <BottomHeader />
            {children}
            <Footer />
          </div>
        </Layout>
      </body>
    </html>
  );
}
