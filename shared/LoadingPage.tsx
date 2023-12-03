"use client";

// import localFont from "next/font/local";
import { motion } from "framer-motion";
import Image from "next/image";

// const anton = localFont({
//   src: "../public/fonts/Anton-Regular.woff2",
//   display: "swap",
// });

export default function LoadingPage() {
  return (
    <motion.section
      className="loading flex justify-center items-center overflow-hidden flex-col gap-4 h-screen fixed inset-0 z-50"
      initial={{ opacity: 1 }}
      animate={{
        opacity: 0,
        top: "-200vh",
      }}
      transition={{ duration: 2, ease: "easeInOut", delay: 3 }}
    >
      <Image
        src="/assets/logo.png"
        alt="logo"
        aria-label="logo"
        width={200}
        height={200}
        loading="lazy"
        placeholder="blur"
        blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8//9uPQAJPANcwi2UtAAAAABJRU5ErkJggg=="
      />
      <div className="loader">
        <svg width="64px" height="48px">
          <polyline
            points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24"
            id="back"
          ></polyline>
          <polyline
            points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24"
            id="front"
          ></polyline>
        </svg>
      </div>
    </motion.section>
  );
}
