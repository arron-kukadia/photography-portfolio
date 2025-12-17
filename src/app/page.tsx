"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { usePortfolioCards, useCoverImage } from "@/hooks/usePortfolio";
import { PortfolioCard } from "@/components/cards/PortfolioCard/PortfolioCard";
import { CardSkeleton } from "@/components/skeletons/CardSkeleton/CardSkeleton";
import styles from "./Home.module.scss";

const Home = () => {
  const { data: portfolioCards, isLoading } = usePortfolioCards();
  const { data: coverImage } = useCoverImage();
  const heroImage = coverImage?.image?.url || portfolioCards?.[0]?.image?.url;

  return (
    <div>
      <section className={styles.hero}>
        {heroImage && (
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className={styles.heroImageWrapper}
          >
            <Image
              src={heroImage}
              alt="Hero"
              fill
              priority
              quality={90}
              sizes="100vw"
              className={styles.heroImage}
            />
          </motion.div>
        )}
        <div className={styles.heroOverlay} />

        <div className={styles.heroContent}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className={styles.heroSubtitle}
            >
              Photography Portfolio
            </motion.p>
            <h1 className={styles.heroTitle}>
              <span className={styles.heroName}>Arron</span>
              <span className={styles.heroNameAccent}>Kukadia</span>
            </h1>
            <p className={styles.heroTagline}>
              Capturing the extraordinary in every frame
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className={styles.scrollIndicator}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ChevronDown className={styles.scrollIcon} />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className={styles.collections}>
        <div className={styles.collectionsContainer}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.collectionsHeader}
          >
            <h2 className={styles.collectionsTitle}>
              Featured{" "}
              <span className={styles.collectionsAccent}>Collections</span>
            </h2>
            <p className={styles.collectionsSubtitle}>
              Explore my portfolio across different genres of photography
            </p>
          </motion.div>

          <div className={styles.collectionsGrid}>
            {isLoading ? (
              <>
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
              </>
            ) : (
              portfolioCards?.map((card, index) => (
                <PortfolioCard key={card.id} card={card} index={index} />
              ))
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
