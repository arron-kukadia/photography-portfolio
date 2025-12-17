"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X, Instagram, Youtube } from "lucide-react";
import { INSTAGRAM_URL, YOUTUBE_URL } from "@/lib/constants";
import { MobileMenu } from "./MobileMenu";
import styles from "./Header.module.scss";

const navItems = [
  { href: "/", label: "Work" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/about", label: "About" },
];

export const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [hasHeroPassed, setHasHeroPassed] = useState(false);

  const isHome = pathname === "/";

  useEffect(() => {
    if (!isHome) {
      return;
    }

    const heroElement = document.querySelector<HTMLElement>(
      "[data-hero-section]"
    );

    if (!heroElement) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHasHeroPassed(!entry.isIntersecting);
      },
      { threshold: 0.01 }
    );

    observer.observe(heroElement);

    return () => {
      observer.disconnect();
    };
  }, [isHome]);

  return (
    <header
      className={`${styles.header} ${
        isHome && !hasHeroPassed ? styles.transparent : ""
      }`}
    >
      <nav className={styles.nav}>
        <div className={styles.navContent}>
          <Link href="/" className={styles.logo}>
            <Image
              src="/logoWhite.png"
              alt="AK1Photography"
              fill
              sizes="80px"
              style={{ objectFit: "contain" }}
              priority
            />
          </Link>

          <div className={styles.desktopNav}>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`${styles.navLink} ${
                  pathname === item.href ? styles.active : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.socialLink} ${styles.instagram}`}
              aria-label="Instagram"
            >
              <Instagram className={styles.socialIcon} />
            </a>
            <a
              href={YOUTUBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="YouTube"
            >
              <Youtube className={styles.socialIcon} />
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={styles.menuButton}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className={styles.menuIcon} />
            ) : (
              <Menu className={styles.menuIcon} />
            )}
          </button>
        </div>
      </nav>

      <MobileMenu
        isOpen={isOpen}
        navItems={navItems}
        pathname={pathname}
        onClose={() => setIsOpen(false)}
      />
    </header>
  );
};
