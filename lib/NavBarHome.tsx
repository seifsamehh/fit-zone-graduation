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
} from "@nextui-org/react";
import { useState } from "react";
import { BiHomeAlt, BiBullseye, BiLogIn } from "react-icons/bi";
import { AiOutlineInfoCircle } from "react-icons/ai";
import Image from "next/image";
import styles from "../styles/nav.module.scss";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { UserButton } from "@clerk/nextjs";
import Music from "./Music";

export default function NavBarHome() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <Navbar shouldHideOnScroll className={`${styles.navlg} z-50 nav`}>
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
              href="/Home-Page"
              title="home"
              aria-label="home"
              aria-current="page"
            >
              <BiHomeAlt />
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/About-Us" title="About Us" aria-label="About Us">
              <AiOutlineInfoCircle />
              About Us
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/Services" title="Services" aria-label="Services">
              <BiBullseye />
              Our Services
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            <UserButton afterSignOutUrl="/" />
          </NavbarItem>
          <NavbarItem>
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
          <NavbarItem>
            <UserButton afterSignOutUrl="/" />
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
              <ThemeSwitcher />
            </NavbarMenuItem>
          </NavbarMenu>
        </NavbarContent>
      </Navbar>
    </>
  );
}
