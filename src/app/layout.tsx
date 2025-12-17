import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Providers } from "@/components/Providers";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "@/styles/globals.scss";
import styles from "./Layout.module.scss";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "AK1Photography",
    template: "%s | AK1Photography",
  },
  description:
    "Professional photography portfolio showcasing landscapes, portraits, cityscapes, and wildlife.",
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => (
  <html lang="en" suppressHydrationWarning>
    <body
      className={`${geistSans.variable} ${geistMono.variable} ${styles.body}`}
    >
      <Providers>
        <Header />
        <main className={styles.main}>{children}</main>
        <Footer />
      </Providers>
    </body>
  </html>
);

export default RootLayout;
