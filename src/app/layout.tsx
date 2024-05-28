import type { Metadata } from "next";
import "./globals.css";
import { Open_Sans } from "next/font/google";

import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import WAButton from "@/components/whatsappButton/WAButton";

const open_sans = Open_Sans({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

const backgroundClass = "bg-purple-300";

const bodyClass = `${open_sans.className} ${backgroundClass}`;

export const metadata: Metadata = {
  title: "Lavanderia Iasmim",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={bodyClass}>
        <Header />
        {children}
        <Footer />
        <WAButton />
      </body>
    </html>
  );
}
