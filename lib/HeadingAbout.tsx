"use client";

import localFont from "next/font/local";
import { ScrollParallax } from "react-just-parallax";

const anton = localFont({
  src: "../public/fonts/Anton-Regular.woff2",
  display: "swap",
});

export default function HeadingAbout() {
  return (
    <ScrollParallax strength={-0.1}>
      <h2 className={`${anton.className}`}>ABOUT US</h2>
    </ScrollParallax>
  );
}
