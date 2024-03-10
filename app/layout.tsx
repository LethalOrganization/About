import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import { BackgroundBeams } from "./components/background/background-beams";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lethal Org",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
</body>
    </html>
  );
}
