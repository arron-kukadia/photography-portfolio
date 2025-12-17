"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { PortfolioCard as PortfolioCardType } from "@/lib/types";
import styles from "./PortfolioCard.module.scss";

type PortfolioCardProps = {
  card: PortfolioCardType;
  index: number;
};

export const PortfolioCard = ({ card, index }: PortfolioCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.2, delay: index * 0.15 }}
  >
    <Link href={`/portfolio/${card.route}`} className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={card.image.url}
          alt={card.genre}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className={styles.image}
        />
        <div className={styles.overlay} />
        <div className={styles.content}>
          <div className={styles.textWrapper}>
            <h3 className={styles.title}>{card.genre}</h3>
            <div className={styles.underline} />
          </div>
        </div>
      </div>
    </Link>
  </motion.div>
);
