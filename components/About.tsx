import AboutSvg from "@/lib/AboutSvg";
import styles from "../styles/about.module.scss";
import HeadingAbout from "@/lib/HeadingAbout";
import TourBtn from "@/lib/TourBtn";

export default function About() {
  return (
    <section
      className={`${styles.about} min-h-screen flex justify-center items-center flex-col overflow-x-hidden relative z-10`}
      id="about"
    >
      <HeadingAbout />
      <p className="leading-8 text-center text-2xl my-6 max-w-4xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, id. Quo
        enim vitae sint nihil totam quod quas animi voluptatum commodi ut, amet,
        iusto molestias aspernatur beatae molestiae, voluptate deserunt?
      </p>
      <TourBtn />
      <AboutSvg />
    </section>
  );
}
