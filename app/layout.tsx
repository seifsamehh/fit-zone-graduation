import type { Metadata } from "next";
import Script from "next/script";
import { Montserrat } from "next/font/google";
import { Providers } from "./providers";
import { Parallax } from "./parallax";
import { Analytics } from "@vercel/analytics/react";
import { ClerkProvider } from "@clerk/nextjs";
import LoadingPage from "@/shared/LoadingPage";
import "./globals.css";
import "../styles/palettes.scss";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fit Zone | Food Estimation Website | Stay Active, Be Healthy",
  description:
    "Fit Zone is an image-based food calorie estimation website that helps you track your calorie intake and make healthier food choices.",
  generator: "Next.js",
  metadataBase: new URL("https://fit-zone-graduation.vercel.app/"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      ar: "/ar",
    },
  },
  applicationName:
    "Fit Zone | Food Estimation Website | Stay Active, Be Healthy",
  referrer: "origin-when-cross-origin",
  keywords: [
    "image-based food calorie estimation",
    "calorie estimation",
    "food calorie estimation",
    "calorie",
    "calories",
    "food",
    "nutrition",
    "fit zone",
    "fit",
    "Healthy eating",
    "Healthy food",
  ],
  authors: [
    { name: "Seif Eldin Sameh", url: "https://seif-sameh-mern.vercel.app/" },
  ],
  colorScheme: "light",
  creator: "Seif Eldin Sameh",
  publisher: "Seif Eldin Sameh",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#cffde1" },
    { media: "(prefers-color-scheme: dark)", color: "#3d5656" },
  ],
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/assets/icon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/assets/icon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/assets/icon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/assets/icon-72x72.png", sizes: "72x72", type: "image/png" },
      { url: "/assets/icon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/assets/icon-128x128.png", sizes: "128x128", type: "image/png" },
      { url: "/assets/icon-144x144.png", sizes: "144x144", type: "image/png" },
      { url: "/assets/icon-152x152.png", sizes: "152x152", type: "image/png" },
      { url: "/assets/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/assets/icon-384x384.png", sizes: "384x384", type: "image/png" },
      { url: "/assets/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/assets/icon-192x192.png" },
      { url: "/assets/icon-152x152.png", sizes: "152x152", type: "image/png" },
      { url: "/assets/icon-144x144.png", sizes: "144x144", type: "image/png" },
      { url: "/assets/icon-128x128.png", sizes: "128x128", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Fit Zone | Food Estimation Website | Stay Active, Be Healthy",
    description:
      "Fit Zone is an image-based food calorie estimation website that helps you track your calorie intake and make healthier food choices. Simply upload a photo of your food and we will provide you with an estimate of the calorie content, as well as nutritional information such as the fat, protein, and carbohydrate content. You can also track your calorie intake over time and set calorie goals.",
    url: "https://fit-zone-graduation.vercel.app/",
    siteName: "Fit Zone | Food Estimation Website | Stay Active, Be Healthy",
    images: [
      {
        url: "/assets/maskable_icon.png",
        width: 512,
        height: 512,
        alt: "Fit Zone | Food Estimation Website | Stay Active, Be Healthy",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fit Zone | Food Estimation Website | Stay Active, Be Healthy",
    description:
      "Fit Zone is an image-based food calorie estimation website that helps you track your calorie intake and make healthier food choices.",
    creator: "@seiffsameh",
    images: ["/assets/maskable_icon.png"],
  },
  verification: {
    google: "google",
    other: {
      me: ["seiffsameh00@gmail.com", "https://seif-sameh-mern.vercel.app/"],
    },
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "food",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={montserrat.className}>
          <LoadingPage />
          <Providers>
            <Parallax>{children}</Parallax>
          </Providers>
          <Analytics />
          <Script
            id="live chat"
            src="https://embed.tawk.to/653bcfd4f2439e1631e92016/1hdoq7m2e"
            defer
            rel="preload"
          />
          <Script
            id="google analytics"
            src="https://www.googletagmanager.com/gtag/js?id=G-GQH2CEG187"
            defer
            rel="preload"
          />
        </body>
      </html>
    </ClerkProvider>
  );
}
