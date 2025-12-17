"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useGenreImages, usePortfolioCards } from "@/hooks/usePortfolio";
import { Lightbox } from "@/components/Lightbox/Lightbox";
import { ImageSkeleton } from "@/components/skeletons/CardSkeleton/CardSkeleton";
import { GenreType } from "@/lib/types";
import styles from "./Genre.module.scss";

const GenrePage = () => {
  const params = useParams();
  const genre = params.genre as string;
  const genreKey = genre === "street" ? "cityscapes" : (genre as GenreType);

  const { data: images, isLoading } = useGenreImages(genreKey);
  const { data: cards } = usePortfolioCards();
  const currentCard = cards?.find((card) => card.route === genre);

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handlePrev = () => {
    if (selectedIndex !== null && images) {
      setSelectedIndex(
        selectedIndex === 0 ? images.length - 1 : selectedIndex - 1
      );
    }
  };

  const handleNext = () => {
    if (selectedIndex !== null && images) {
      setSelectedIndex(
        selectedIndex === images.length - 1 ? 0 : selectedIndex + 1
      );
    }
  };

  return (
    <div className={styles.page}>
      <section className={styles.headerSection}>
        <div className={styles.container}>
          <Link href="/" className={styles.backLink}>
            <ArrowLeft className={styles.backIcon} />
            Back to Collections
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className={styles.label}>Collection</p>
            <h1 className={styles.title}>{currentCard?.genre || genre}</h1>
          </motion.div>
        </div>
      </section>

      <section className={styles.gallerySection}>
        <div className={styles.container}>
          <div className={styles.masonry}>
            {isLoading ? (
              <>
                <ImageSkeleton />
                <ImageSkeleton />
                <ImageSkeleton />
                <ImageSkeleton />
                <ImageSkeleton />
                <ImageSkeleton />
              </>
            ) : (
              images?.map((image, index) => (
                <motion.div
                  key={image.url}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                  className={styles.masonryItem}
                >
                  <button
                    onClick={() => setSelectedIndex(index)}
                    className={styles.imageButton}
                  >
                    <Image
                      src={image.url}
                      alt={`${genre} photo ${index + 1}`}
                      width={600}
                      height={800}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className={styles.image}
                    />
                    <div className={styles.imageOverlay} />
                  </button>
                </motion.div>
              ))
            )}
          </div>
        </div>
      </section>

      {images && (
        <Lightbox
          images={images}
          selectedIndex={selectedIndex}
          onClose={() => setSelectedIndex(null)}
          onPrev={handlePrev}
          onNext={handleNext}
          altPrefix={genre}
        />
      )}
    </div>
  );
};

export default GenrePage;
