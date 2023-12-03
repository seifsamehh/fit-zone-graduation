"use client";

import { BsGooglePlay } from "react-icons/bs";
import { SiApple } from "react-icons/si";
import styles from "../styles/footer.module.scss";
import localFont from "next/font/local";
import Link from "next/link";

const anton = localFont({
  src: "../public/fonts/Anton-Regular.woff2",
  display: "swap",
});

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={`${styles.footer}`}>
      <div className="max-w-2xl mx-auto text-white py-10">
        <div className={`${styles.footerContent} text-center`}>
          <h3 className={`${anton.className} mb-3`}>
            {" "}
            Download our fitness app{" "}
          </h3>
          <p> Stay fit. All day, every day.</p>
          <div className={`${styles.downloadBoxs} flex justify-center my-10`}>
            <div
              className={`${styles.googlePlay} flex items-center border rounded-lg px-4 py-2 w-52 mx-2`}
            >
              <BsGooglePlay />
              <div className="text-left ml-3">
                <p className="text-sm md:text-base"> Google Play Store </p>
              </div>
            </div>
            <div
              className={`${styles.iphone} flex items-center border rounded-lg px-4 py-2 w-52 mx-2}`}
            >
              <SiApple />
              <div className="text-left ml-3">
                <p className="text-sm md:text-base"> Apple Store </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-28 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
          <p className="order-2 md:order-1 mt-8 md:mt-0">
            {" "}
            &copy; Fit Zone, {currentYear}.{" "}
          </p>
          <div className="order-1 md:order-2">
            <Link href="/About-Us" title="About Us" className="px-2">
              About us
            </Link>
            <Link
              href="/Contact-Us"
              title="Contact Us"
              className="px-2 border-l"
            >
              Contact us
            </Link>
            <Link
              href="/privacy-policy"
              title="Privacy Policy"
              className="px-2 border-l"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
