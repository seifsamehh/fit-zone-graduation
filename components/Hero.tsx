"use client";

import { motion } from "framer-motion";
import localFont from "next/font/local";
import { ScrollParallax } from "react-just-parallax";

const anton = localFont({
  src: "../public/fonts/Anton-Regular.woff2",
  display: "swap",
});

export default function Hero() {
  return (
    <section
      className="hero min-h-screen flex justify-center items-center overflow-x-hidden relative"
      id="hero"
    >
      <div className="hero-content flex justify-center items-center flex-col w-screen min-h-screen">
        <motion.h1
          className={`${anton.className} text-center min-[290px]:text-8xl md:text-[16rem]`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 4 }}
        >
          Fit
        </motion.h1>
        <motion.h2
          className={`${anton.className} text-center min-[290px]:text-8xl md:text-[16rem] relative -z-10`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 4.5 }}
        >
          Zone
        </motion.h2>
        <motion.svg viewBox="0 0 356.9 46.6" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            d="M1.1 45.5c21.7-10.3 43.7-20 65.9-29.2-2 10-5.1 19.8-9.2 29.2C97.7 32.7 138.3 21.8 179.3 13c-6.9 10.3-14.5 20.1-22.8 29.4 28.7-13.6 57.5-27.3 86.2-40.9-2.7 9-6 17.8-9.8 26.4 21.2-10 42.9-18.9 65-26.7-3.7 7.2-6.1 15.1-6.9 23.1 21.8-5.4 43.5-11.7 64.8-18.7"
            fill="none"
            stroke="#fed049"
            strokeLinecap="round"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 5, ease: "easeInOut" }}
          />
        </motion.svg>
      </div>
      <ScrollParallax isAbsolutelyPositioned>
        <div className="hero-icons absolute w-screen h-screen">
          {/* dumble */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-barbell absolute top-[10%] left-[10%]"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M2 12h1" />
            <path d="M6 8h-2a1 1 0 0 0 -1 1v6a1 1 0 0 0 1 1h2" />
            <path d="M6 7v10a1 1 0 0 0 1 1h1a1 1 0 0 0 1 -1v-10a1 1 0 0 0 -1 -1h-1a1 1 0 0 0 -1 1z" />
            <path d="M9 12h6" />
            <path d="M15 7v10a1 1 0 0 0 1 1h1a1 1 0 0 0 1 -1v-10a1 1 0 0 0 -1 -1h-1a1 1 0 0 0 -1 1z" />
            <path d="M18 8h2a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-2" />
            <path d="M22 12h-1" />
          </svg>
          {/* heart */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-heartbeat absolute top-[10%] right-[10%]"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M19.5 13.572l-7.5 7.428l-2.896 -2.868m-6.117 -8.104a5 5 0 0 1 9.013 -3.022a5 5 0 1 1 7.5 6.572" />
            <path d="M3 13h2l2 3l2 -6l1 3h3" />
          </svg>
          {/* rope */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-jump-rope absolute top-[50%] left-[15%]"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M6 14v-6a3 3 0 1 1 6 0v8a3 3 0 0 0 6 0v-6" />
            <path d="M16 3m0 2a2 2 0 0 1 2 -2h0a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h0a2 2 0 0 1 -2 -2z" />
            <path d="M4 14m0 2a2 2 0 0 1 2 -2h0a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h0a2 2 0 0 1 -2 -2z" />
          </svg>
          {/* stretch */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-stretching absolute top-[50%] right-[15%]"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M16 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
            <path d="M5 20l5 -.5l1 -2" />
            <path d="M18 20v-5h-5.5l2.5 -6.5l-5.5 1l1.5 2" />
          </svg>
          {/* weight */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-weight absolute bottom-[10%] left-[5%]"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
            <path d="M6.835 9h10.33a1 1 0 0 1 .984 .821l1.637 9a1 1 0 0 1 -.984 1.179h-13.604a1 1 0 0 1 -.984 -1.179l1.637 -9a1 1 0 0 1 .984 -.821z" />
          </svg>
          {/* salad */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-salad absolute bottom-[10%] left-[50%]"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 11h16a1 1 0 0 1 1 1v.5c0 1.5 -2.517 5.573 -4 6.5v1a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1 -1v-1c-1.687 -1.054 -4 -5 -4 -6.5v-.5a1 1 0 0 1 1 -1z" />
            <path d="M18.5 11c.351 -1.017 .426 -2.236 .5 -3.714v-1.286h-2.256c-2.83 0 -4.616 .804 -5.64 2.076" />
            <path d="M5.255 11.008a12.204 12.204 0 0 1 -.255 -2.008v-1h1.755c.98 0 1.801 .124 2.479 .35" />
            <path d="M8 8l1 -4l4 2.5" />
            <path d="M13 11v-.5a2.5 2.5 0 1 0 -5 0v.5" />
          </svg>
          {/* scale */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-scale-outline absolute bottom-[10%] right-[5%]"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 3m0 4a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" />
            <path d="M12 7c1.956 0 3.724 .802 5 2.095l-2.956 2.904a3 3 0 0 0 -2.038 -.799a3 3 0 0 0 -2.038 .798l-2.956 -2.903a6.979 6.979 0 0 1 5 -2.095z" />
          </svg>
        </div>
      </ScrollParallax>
    </section>
  );
}
