"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Instagram, Youtube } from "lucide-react";
import { INSTAGRAM_URL, YOUTUBE_URL } from "@/lib/constants";
import styles from "./Header.module.scss";

export type NavItem = {
  href: string;
  label: string;
};

interface MobileMenuProps {
  isOpen: boolean;
  navItems: NavItem[];
  pathname: string;
  onClose: () => void;
}

export const MobileMenu = ({
  isOpen,
  navItems,
  pathname,
  onClose,
}: MobileMenuProps) => (
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
                onClick={onClose}
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
              onClick={onClose}
              className={styles.mobileSocialLink}
            >
              <Instagram className={styles.socialIcon} />
              <span className={styles.mobileSocialText}>Instagram</span>
            </a>
            <a
              href={YOUTUBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
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
);
