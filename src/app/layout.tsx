import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { Open_Sans } from "next/font/google";

const open_sans = Open_Sans({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

const backgroundClass = "bg-fuchsia-300";

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
      </body>
    </html>
  );
}
