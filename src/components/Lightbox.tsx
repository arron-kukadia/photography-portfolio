"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Asset } from "@/lib/types";
import styles from "./Lightbox.module.scss";

type LightboxProps = {
  images: Asset[];
  selectedIndex: number | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  altPrefix: string;
};

export const Lightbox = ({
  images,
  selectedIndex,
  onClose,
  onPrev,
  onNext,
  altPrefix,
}: LightboxProps) => (
  <AnimatePresence>
    {selectedIndex !== null && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={styles.overlay}
        onClick={onClose}
      >
        <button
          onClick={onClose}
          className={styles.closeButton}
          aria-label="Close"
        >
          <X className={styles.closeIcon} />
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className={`${styles.navButton} ${styles.prevButton}`}
          aria-label="Previous"
        >
          <ChevronLeft className={styles.navIcon} />
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className={`${styles.navButton} ${styles.nextButton}`}
          aria-label="Next"
        >
          <ChevronRight className={styles.navIcon} />
        </button>

        <motion.div
          key={selectedIndex}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className={styles.imageWrapper}
          onClick={(e) => e.stopPropagation()}
        >
          <Image
            src={images[selectedIndex].url}
            alt={`${altPrefix} photo ${selectedIndex + 1}`}
            width={1400}
            height={1000}
            className={styles.image}
            priority
          />
        </motion.div>

        <div className={styles.counter}>
          {selectedIndex + 1} / {images.length}
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);
