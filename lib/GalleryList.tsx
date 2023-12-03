"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function GalleryList() {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], ["50%", "-50%"]);
  return (
    <motion.div
      className="galleryList w-full flex justify-between items-center gap-4 absolute inset-0 -z-10"
      style={{
        x,
      }}
      transition={{
        ease: "easeInOut",
      }}
    >
      <Image
        src="/assets/image1.webp"
        alt="gallery"
        aria-label="gallery"
        width={500}
        height={500}
        loading="lazy"
        placeholder="blur"
        blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8//9uPQAJPANcwi2UtAAAAABJRU5ErkJggg=="
      />
      <Image
        src="/assets/image2.webp"
        alt="gallery"
        aria-label="gallery"
        width={500}
        height={500}
        loading="lazy"
        placeholder="blur"
        blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8//9uPQAJPANcwi2UtAAAAABJRU5ErkJggg=="
      />
      <Image
        src="/assets/image3.webp"
        alt="gallery"
        aria-label="gallery"
        width={500}
        height={500}
        loading="lazy"
        placeholder="blur"
        blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8//9uPQAJPANcwi2UtAAAAABJRU5ErkJggg=="
      />
      <Image
        src="/assets/image4.webp"
        alt="gallery"
        aria-label="gallery"
        width={500}
        height={500}
        loading="lazy"
        placeholder="blur"
        blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8//9uPQAJPANcwi2UtAAAAABJRU5ErkJggg=="
      />
      <Image
        src="/assets/image5.webp"
        alt="gallery"
        aria-label="gallery"
        width={500}
        height={500}
        loading="lazy"
        placeholder="blur"
        blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8//9uPQAJPANcwi2UtAAAAABJRU5ErkJggg=="
      />
    </motion.div>
  );
}
