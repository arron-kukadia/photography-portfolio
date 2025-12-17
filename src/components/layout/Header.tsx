"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Instagram, Youtube } from "lucide-react";
import { INSTAGRAM_URL, YOUTUBE_URL } from "@/lib/constants";
import styles from "./Header.module.scss";

const navItems = [
  { href: "/", label: "Work" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/about", label: "About" },
];

export const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isHome = pathname === "/";

  return (
    <header className={`${styles.header} ${isHome ? styles.transparent : ""}`}>
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
                {pathname === item.href && (
                  <motion.div
                    layoutId="activeNav"
                    className={styles.activeIndicator}
                  />
                )}
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

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={styles.mobileMenu}
          >
            <div className={styles.mobileMenuContent}>
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`${styles.mobileNavLink} ${
                      pathname === item.href ? styles.active : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className={styles.mobileSocialSection}
              >
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className={styles.mobileSocialLink}
                >
                  <Instagram className={styles.socialIcon} />
                  <span className={styles.mobileSocialText}>Instagram</span>
                </a>
                <a
                  href={YOUTUBE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className={`${styles.mobileSocialLink} ${styles.youtube}`}
                >
                  <Youtube className={styles.socialIcon} />
                  <span className={styles.mobileSocialText}>YouTube</span>
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
