"use client";

import { ScrollParallax } from "react-just-parallax";
import localFont from "next/font/local";

const anton = localFont({
  src: "../public/fonts/Anton-Regular.woff2",
  display: "swap",
});

export default function HeadingCategories() {
  return (
    <ScrollParallax strength={-0.1}>
      <h2 className={`${anton.className}`} id="categories">
        CATEGORIES
      </h2>
    </ScrollParallax>
  );
}
