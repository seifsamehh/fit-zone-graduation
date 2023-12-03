"use client";

import { Rock_Salt } from "next/font/google";
import { ScrollParallax } from "react-just-parallax";

const rock = Rock_Salt({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export default function Rest() {
  return (
    <section
      className="rest overflow-hidden min-h-screen flex justify-center items-center flex-col gap-6 pt-6 relative"
      id="rest"
    >
      <ScrollParallax>
        <h2
          className={`${rock.className} min-[290px]:text-5xl md:text-8xl text-center min-[290px]:mx-2 md:mx-0`}
        >
          Stay Active, Be Healthy
        </h2>
      </ScrollParallax>
      <svg
        className="w-60 h-60 absolute min-[290px]:top-0 min-[290px]:-left-[20%] md:top-[10%] md:left-0 -z-10"
        viewBox="0 0 45 95"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.6255 2.70275C22.5417 10.814 22.7241 18.6509 20.7933 26.5407C19.8 30.5996 19.0342 34.6071 17.0855 38.3475C14.3071 43.6803 9.69255 50.1326 3.62191 52.033C2.73495 52.3107 0.723348 52.4979 2.74508 51.972C4.93854 51.4014 7.40023 50.9879 9.66671 50.8863C12.9552 50.739 15.8744 52.9678 17.9783 55.2657C21.7401 59.3744 23.5308 64.7026 24.8519 70.0399C26.1734 75.3791 26.5238 80.7837 27.3367 86.2033C27.63 88.1584 27.8963 90.1191 28.0969 92.0861C28.1126 92.2397 28.3134 94.4416 28.0512 93.9846C26.5877 91.4342 26.4763 87.4934 26.1816 84.6685C25.7101 80.1484 25.9418 75.62 26.4218 71.1088C26.7566 67.9618 27.0554 64.533 28.2944 61.5717C29.7711 58.0421 33.0101 55.79 36.059 53.4161C36.059 53.4161 44.7178 49.8786 43.2816 48.2801C39.9699 44.5944 29.4963 41.7198 27.461 37.12C25.1376 31.869 24.6262 25.5307 24.4409 19.8611C24.2444 13.8479 23.8232 7.81143 24.245 1.81071"
          stroke="#fed049"
          strokeWidth="1.90596"
          strokeLinecap="round"
        ></path>
      </svg>
    </section>
  );
}
