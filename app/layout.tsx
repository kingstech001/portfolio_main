import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgressBar from "@/components/Scrollprogressbar";
import BackToTop from "@/components/Backtotop";
import MouseFollower from "@/components/Mousefollower";

export const metadata: Metadata = {
  title: {
    default: "Kings Tech — Software Developer",
    template: "%s | Kings Tech",
  },
  description:
    "Software developer specialising in React, Next.js, and scalable backend systems. Available for freelance projects and consulting.",
  keywords: ["full-stack developer", "React", "Next.js", "TypeScript", "freelance developer", "portfolio"],
  authors: [{ name: "Jordan Reeves", url: "https://jordanreeves.dev" }],
  creator: "Jordan Reeves",
  metadataBase: new URL("https://jordanreeves.dev"),
  openGraph: {
    title: "Kings Tech — Software Developer",
    description:
      "Software developer specialising in React, Next.js, and scalable backend systems.",
    url: "https://jordanreeves.dev",
    siteName: "Kings Tech Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kings Tech — Software Developer",
    description:
      "Software developer specialising in React, Next.js, and scalable backend systems.",
    creator: "@jordanreeves",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        {/* Progress bar sits above everything, including the navbar */}
        <ScrollProgressBar />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        {/* Floating button rendered outside main so it never shifts layout */}
        <BackToTop />
        <MouseFollower />
      </body>
    </html>
  );
}