import FeaturesImg from "@/lib/FeaturesImg";
import { BiCheckCircle } from "react-icons/bi";
import styles from "../styles/features.module.scss";
import localFont from "next/font/local";

const anton = localFont({
  src: "../public/fonts/Anton-Regular.woff2",
  display: "swap",
});

export default function Features() {
  return (
    <section
      className={`${styles.features} features min-h-[70vh] overflow-hidden bg-[#68b984] py-2 relative`}
      id="features"
    >
      <h2
        className={`${anton.className} text-center text-7xl dark:text-[#1f1e1e]`}
      >
        Why Fit Zone?
      </h2>
      <div className="featuresContent flex justify-around items-center min-[290px]:flex-wrap md:flex-nowrap min-h-[70vh]">
        <div className="left min-[290px]:bg-[#68b984] md:bg-transparent min-[290px]:mx-4 md:mx-0">
          <div className="list flex justify-start items-center gap-2 min-[290px]:flex-wrap md:flex-nowrap my-2 md:text-2xl dark:text-[#1f1e1e]">
            <BiCheckCircle />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </div>
          <div className="list flex justify-start items-center gap-2 min-[290px]:flex-wrap md:flex-nowrap my-2 md:text-2xl dark:text-[#1f1e1e]">
            <BiCheckCircle />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </div>
          <div className="list flex justify-start items-center gap-2 min-[290px]:flex-wrap md:flex-nowrap my-2 md:text-2xl dark:text-[#1f1e1e]">
            <BiCheckCircle />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </div>
          <div className="list flex justify-start items-center gap-2 min-[290px]:flex-wrap md:flex-nowrap my-2 md:text-2xl dark:text-[#1f1e1e]">
            <BiCheckCircle />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </div>
          <div className="list flex justify-start items-center gap-2 min-[290px]:flex-wrap md:flex-nowrap my-2 md:text-2xl dark:text-[#1f1e1e]">
            <BiCheckCircle />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </div>
        </div>
        <div className="right">
          <FeaturesImg />
        </div>
      </div>
    </section>
  );
}
