"use client";

import Image from "next/image";
import { ScrollParallax } from "react-just-parallax";

export default function FeaturesImg() {
  return (
    <ScrollParallax strength={-0.5}>
      <Image
        src="/assets/logo.png"
        alt="logo"
        aria-label="logo"
        width={300}
        height={300}
        loading="lazy"
        placeholder="blur"
        blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8//9uPQAJPANcwi2UtAAAAABJRU5ErkJggg=="
      />
    </ScrollParallax>
  );
}
