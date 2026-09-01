import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Srikar Jakkena | AI/ML Engineer",
  description: "Portfolio of Srikar Jakkena — AI/ML engineer specializing in machine learning, computer vision, deep learning, and generative AI.",
  keywords: [
    "Srikar Jakkena",
    "J. Srikar",
    "AI/ML Engineer",
    "Machine Learning Portfolio",
    "Computer Vision",
    "Generative AI",
    "RAG",
    "SignBridge AI",
    "Brain Tumor AI",
    "Software Engineer"
  ],
  authors: [{ name: "Srikar Jakkena" }],
  creator: "Srikar Jakkena",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://github.com/JakkenaSrikar",
    title: "Srikar Jakkena | AI/ML Engineer",
    description: "Portfolio of Srikar Jakkena — AI/ML engineer specializing in machine learning, computer vision, deep learning, and generative AI.",
    siteName: "Srikar Jakkena Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Srikar Jakkena | AI/ML Engineer",
    description: "Portfolio of Srikar Jakkena — AI/ML engineer specializing in machine learning, computer vision, deep learning, and generative AI.",
    creator: "@JakkenaSrikar",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans min-h-screen bg-zinc-950 text-zinc-100 flex flex-col antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
