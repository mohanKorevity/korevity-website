import type { Metadata, Viewport } from "next";
import OrganizationSchema from "./schema";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "./components/common/GoogleAnalytics";
import MicrosoftClarity from "./components/common/Clarity";
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
    default: "KoreVity | Business Intelligence and AI Automation",
    template: "%s | KoreVity",
  },

  description:
  "KoreVity helps businesses improve operations with Business Intelligence, AI Automation, dashboards, workflow automation and intelligent business systems.",
   keywords: [
    "Business Intelligence",
    "AI Automation",
    "Power BI",
    "Business Analytics",
    "Workflow Automation",
    "Business Consulting",
    "Digital Transformation",
    "KoreVity",
  ],

  authors: [
    {
      name: "KoreVity",
      url: "https://korevity.com",
    },
  ],

  creator: "KoreVity",
  publisher: "KoreVity",
  
metadataBase: new URL("https://korevity.com"),
alternates: {
  canonical: "/",
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
  openGraph: {
    title: "KoreVity | Business Intelligence and AI Automation",
    description:
      "Helping businesses work smarter with Business Intelligence and AI Automation.",
    url: "https://korevity.com",
    siteName: "KoreVity",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "KoreVity",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "KoreVity | Business Intelligence and AI Automation",
    description:
      "Helping businesses work smarter with Business Intelligence and AI Automation.",
    images: ["/og-image.png"],
  },
  icons: {
  icon: "/favicon.ico",
  apple: "/apple-icon.png",
},
manifest: "/site.webmanifest",

category: "Technology",

};
export const viewport: Viewport = {
  themeColor: "#020617",
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
  <OrganizationSchema />
<GoogleAnalytics />

{children}
</body>

    </html>

  );

}