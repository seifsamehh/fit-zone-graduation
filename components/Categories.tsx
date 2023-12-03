import { BsFillArrowRightCircleFill } from "react-icons/bs";
import styles from "../styles/categories.module.scss";
import HeadingCategories from "@/lib/HeadingCategories";
import Link from "next/link";

export default function Categories() {
  return (
    <section
      className={`${styles.categories} overflow-hidden min-h-screen relative`}
    >
      <HeadingCategories />
      <svg
        className="w-60 h-60 absolute min-[290px]:bottom-0 min-[290px]:left-[20%] md:top-0 md:left-[2%] -z-10"
        viewBox="0 0 82 84"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M41.5816 1.21606C39.7862 5.82482 40.3852 10.0977 40.5593 14.9633C40.7854 21.2812 40.9774 27.5593 41.4363 33.8661"
          stroke="#fed049"
          strokeWidth="1.90596"
          strokeLinecap="round"
        ></path>
        <path
          d="M41.0651 45.1798C39.7505 51.5096 40.3418 57.6794 40.8893 64.0791C41.4093 70.1568 42.1389 76.2117 42.8566 82.2682"
          stroke="#fed049"
          strokeWidth="1.90596"
          strokeLinecap="round"
        ></path>
        <path
          d="M1.13413 46.6647C5.16696 44.8703 8.96881 44.7974 13.3092 44.5029C19.8761 44.0572 26.2025 43.2089 32.656 41.952"
          stroke="#fed049"
          strokeWidth="1.90596"
          strokeLinecap="round"
        ></path>
        <path
          d="M47.2629 40.0959C58.4139 39.3819 69.3895 37.5305 80.4472 35.9965"
          stroke="#fed049"
          strokeWidth="1.90596"
          strokeLinecap="round"
        ></path>
        <path
          d="M49.3429 34.6508L52.917 28.1667"
          stroke="#fed049"
          strokeWidth="1.90596"
          strokeLinecap="round"
        ></path>
        <path
          d="M32.9786 50.3504L28.6387 54.6391"
          stroke="#fed049"
          strokeWidth="1.90596"
          strokeLinecap="round"
        ></path>
        <path
          d="M52.6361 48.6656L56.9506 51.5758"
          stroke="#fed049"
          strokeWidth="1.90596"
          strokeLinecap="round"
        ></path>
        <path
          d="M31.549 30.8471C26.8741 29.4323 22.7143 27.3543 18.2738 25.3586"
          stroke="#fed049"
          strokeWidth="1.90596"
          strokeLinecap="round"
        ></path>
      </svg>
      <div className="lists min-[290px]:bg-[#cffde1] md:bg-transparent min-[290px]:dark:bg-[#3d5656] md:dark:bg-transparent flex justify-center items-start flex-col min-[290px]:h-[60vh] md:h-screen px-8 min-[290px]:gap-16 md:gap-28 relative z-20">
        <div
          className="list flex justify-between items-end w-full border-b-4 border-[#fed049] border-solid min-[290px]:gap-4 md:gap-0 py-4"
          id="fitness"
        >
          <h3>
            01
            <br />
            <span className="font-bold">FITNESS</span>
          </h3>
          <Link href="/fitness" title="fitness" aria-label="fitness">
            <BsFillArrowRightCircleFill className="min-[290px]:text-5xl md:text-[5rem] text-[#fed049] rotate-[-35deg]" />
          </Link>
        </div>
        <div
          className="list flex justify-between items-end w-full border-b-4 border-[#fed049] border-solid min-[290px]:gap-4 md:gap-0 py-4"
          id="calories"
        >
          <h3>
            02
            <br />
            <span className="font-bold">CALORIES ESTIMATION</span>
          </h3>
          <Link href="/calories" title="calories" aria-label="calories">
            <BsFillArrowRightCircleFill className="min-[290px]:text-5xl md:text-[5rem] text-[#fed049] rotate-[-35deg]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
