"use client";

import { driver } from "driver.js";
import "driver.js/dist/driver.css";
import styles from "../styles/tourBtn.module.scss";
import localFont from "next/font/local";

const anton = localFont({
  src: "../public/fonts/Anton-Regular.woff2",
  display: "swap",
});

export default function TourBtn() {
  const handleClick = () => {
    const driverObj = driver({
      showProgress: true,
      overlayColor: "#fed049",
      steps: [
        {
          element: "#my-button",
          popover: {
            title: "Welcome To Fit Zone Website 💪",
            description: "In this tour we will show you how to use the website",
            side: "right",
            align: "start",
          },
        },
        {
          element: "#navLg",
          popover: {
            title: "Navbar",
            description:
              "Here you can find all the navigation links of the website. And also you can find theme switcher.",
            side: "bottom",
            align: "center",
          },
        },
        {
          element: "#home-page",
          popover: {
            title: "Home Page",
            description: "Here you can find the main content of the website.",
            side: "bottom",
            align: "center",
          },
        },
        {
          element: "#about-page",
          popover: {
            title: "About Page",
            description: "Here you can know more who we are.",
            side: "bottom",
            align: "center",
          },
        },
        {
          element: "#services-page",
          popover: {
            title: "Services Page",
            description: "Here you can find our services.",
            side: "bottom",
            align: "center",
          },
        },
        {
          element: "#login",
          popover: {
            title: "Login",
            description: "Here you can login to your account.",
            side: "bottom",
            align: "center",
          },
        },
        {
          element: "#sign-up",
          popover: {
            title: "SignUp",
            description: "Here you can create an account.",
            side: "bottom",
            align: "center",
          },
        },
        {
          element: "#theme-switcher",
          popover: {
            title: "Theme",
            description: "Here you can change the theme.",
            side: "bottom",
            align: "center",
          },
        },
        {
          element: "#music",
          popover: {
            title: "Music Button",
            description: "Here you can start the music.",
            side: "bottom",
            align: "center",
          },
        },
        {
          element: "#hero",
          popover: {
            title: "Hero Section",
            description: "Here you can see the intro of the website.",
            side: "bottom",
            align: "center",
          },
        },
        {
          element: "#about",
          popover: {
            title: "About Us",
            description: "Here you can read more about us",
            side: "top",
            align: "center",
          },
        },
        {
          element: "#categories",
          popover: {
            title: "Categories",
            description: "Here you can see all the categories.",
            side: "top",
            align: "center",
          },
        },
        {
          element: "#fitness",
          popover: {
            title: "Fitness",
            description:
              "Here you can see all the fitness content and services.",
            side: "top",
            align: "center",
          },
        },
        {
          element: "#calories",
          popover: {
            title: "Caleries Estimation",
            description:
              "Here you can see all the calories estimation content and services.",
            side: "top",
            align: "center",
          },
        },
        {
          element: "#fit-zone",
          popover: {
            title: "Fit Zone Hashtag",
            description: "This is our hashtag.",
            side: "top",
            align: "center",
          },
        },
        {
          element: "#features",
          popover: {
            title: "Fit Zone Features",
            description: "Here you can see all the features.",
            side: "top",
            align: "center",
          },
        },
        {
          element: "#rest",
          popover: {
            title: "Keep it up!",
            description: "Stay active, keep healthy.",
            side: "top",
            align: "center",
          },
        },
      ],
    });

    driverObj.drive();
  };
  return (
    <div className={`${styles.tour}`}>
      <button
        id="my-button"
        onClick={handleClick}
        className={`${anton.className}`}
      >
        Start Tour
      </button>
    </div>
  );
}
