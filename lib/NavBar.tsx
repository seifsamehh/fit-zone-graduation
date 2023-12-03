"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarItem,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";
import { useState } from "react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { BiHomeAlt, BiBullseye, BiLogIn } from "react-icons/bi";
import { AiOutlineInfoCircle } from "react-icons/ai";
import Image from "next/image";
import styles from "../styles/nav.module.scss";
import Music from "./Music";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <Navbar shouldHideOnScroll className={`${styles.navlg}`} id="navLg">
        <NavbarBrand>
          <Image
            src="/assets/logo.png"
            alt="logo"
            aria-label="logo"
            width={150}
            height={150}
            priority={true}
            placeholder="blur"
            blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8//9uPQAJPANcwi2UtAAAAABJRU5ErkJggg=="
          />
        </NavbarBrand>
        <NavbarContent className="flex gap-4" justify="center">
          <NavbarItem>
            <Link
              href="/"
              title="home"
              aria-label="home"
              aria-current="page"
              id="home-page"
            >
              <BiHomeAlt />
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              href="/About-Us"
              title="About Us"
              aria-label="About Us"
              id="about-page"
            >
              <AiOutlineInfoCircle />
              About Us
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              href="/Services"
              title="Services"
              aria-label="Services"
              id="services-page"
            >
              <BiBullseye />
              Our Services
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="flex">
            <Link href="/sign-in" title="login" aria-label="login" id="login">
              <BiLogIn />
              Login
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Button
              as={Link}
              href="/sign-up"
              title="Sign Up"
              aria-label="Sign Up"
              variant="flat"
              id="sign-up"
            >
              Sign Up
            </Button>
          </NavbarItem>
          <NavbarItem id="theme-switcher">
            <ThemeSwitcher />
          </NavbarItem>
          <NavbarItem>
            <Music />
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      {/* small screen */}
      <Navbar
        shouldHideOnScroll
        onMenuOpenChange={setIsMenuOpen}
        className={`${styles.navsm}`}
      >
        <NavbarBrand>
          <Image
            src="/assets/logo.png"
            alt="logo"
            aria-label="logo"
            width={150}
            height={150}
            priority={true}
            placeholder="blur"
            blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8//9uPQAJPANcwi2UtAAAAABJRU5ErkJggg=="
          />
        </NavbarBrand>
        <NavbarContent justify="end">
          <NavbarItem>
            <Music />
          </NavbarItem>
          <NavbarContent>
            <NavbarMenuToggle
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            />
          </NavbarContent>
          <NavbarMenu className={`${styles.navMenu}`}>
            <NavbarMenuItem>
              <Link href="/" title="home" aria-label="home" aria-current="page">
                <BiHomeAlt />
                Home
              </Link>
            </NavbarMenuItem>
            <NavbarMenuItem>
              <Link href="/About-Us" title="About Us" aria-label="About Us">
                <AiOutlineInfoCircle />
                About Us
              </Link>
            </NavbarMenuItem>
            <NavbarMenuItem>
              <Link href="/Services" title="Services" aria-label="Services">
                <BiBullseye />
                Our Services
              </Link>
            </NavbarMenuItem>
            <NavbarMenuItem>
              <Link href="/sign-in" title="login" aria-label="login">
                <BiLogIn />
                Login
              </Link>
            </NavbarMenuItem>
            <NavbarMenuItem>
              <Button
                as={Link}
                href="/sign-up"
                title="Sign Up"
                aria-label="Sign Up"
                variant="flat"
              >
                Sign Up
              </Button>
            </NavbarMenuItem>
            <NavbarMenuItem>
              <ThemeSwitcher />
            </NavbarMenuItem>
          </NavbarMenu>
        </NavbarContent>
      </Navbar>
    </>
  );
}
