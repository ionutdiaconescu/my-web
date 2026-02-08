import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import NavBar from "./components/NavBar";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ionutdiaconescu.com"),
  title: {
    default: "Ionut Diaconescu — Front-End Developer",
    template: "%s | Ionut Diaconescu",
  },
  description:
    "Front-end developer building focused, accessible interfaces with React, Next.js, and Tailwind. Available for new projects and collaborations.",
  applicationName: "Ionut Diaconescu Portfolio",
  keywords: [
    "Ionut Diaconescu",
    "Front-End Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Portfolio",
    "Web Developer",
  ],
  authors: [{ name: "Ionut Diaconescu" }],
  creator: "Ionut Diaconescu",
  publisher: "Ionut Diaconescu",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ionut Diaconescu — Front-End Developer",
    description:
      "Front-end developer building focused, accessible interfaces with React, Next.js, and Tailwind.",
    url: "/",
    siteName: "Ionut Diaconescu Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/profile.webp",
        width: 1200,
        height: 630,
        alt: "Ionut Diaconescu profile",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ionut Diaconescu — Front-End Developer",
    description:
      "Front-end developer building focused, accessible interfaces with React, Next.js, and Tailwind.",
    images: ["/images/profile.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "portfolio",
  icons: {
    icon: "/images/logo.webp",
    apple: "/images/logo.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
