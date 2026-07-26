import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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

  title: {
    default:
      "KoreVity | Business Intelligence and AI Automation",
    template:
      "%s | KoreVity",
  },


  description:
    "KoreVity helps businesses work smarter with Business Intelligence, AI Automation, intelligent dashboards, workflow automation and data-driven solutions.",


  keywords: [
    "KoreVity",
    "Business Intelligence",
    "AI Automation",
    "Artificial Intelligence",
    "Business Analytics",
    "Dashboard Development",
    "Workflow Automation",
    "Data Analytics",
    "Digital Transformation",
  ],


  authors: [
    {
      name: "KoreVity",
    },
  ],


  creator:
    "KoreVity",


  openGraph: {

    title:
      "KoreVity | Business Intelligence and AI Automation",

    description:
      "Helping businesses make smarter decisions through Business Intelligence, AI Automation and intelligent digital solutions.",

    siteName:
      "KoreVity",

    type:
      "website",

  },


  twitter: {

    card:
      "summary_large_image",

    title:
      "KoreVity | Business Intelligence and AI Automation",

    description:
      "Business Intelligence, AI Automation and intelligent solutions designed to help businesses work smarter.",

  },


};


export default function RootLayout({

  children,

}: Readonly<{

  children:
    React.ReactNode;

}>) {


  return (

    <html
  lang="en"
  data-scroll-behavior="smooth"
  className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
>

      <body className="min-h-full flex flex-col bg-slate-950 text-white">

        {children}

      </body>

    </html>

  );

}