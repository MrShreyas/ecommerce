import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MainHeader from "./components/main-header";
import LandingPageHeader from "./components/landing-page-header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ecommerce",
  description: "Ecommerce Website Created By Using NextJs and Tailwind Css",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        <LandingPageHeader></LandingPageHeader>
        {children}
      </body>
    </html>
  );
}
