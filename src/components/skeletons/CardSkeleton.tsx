import styles from "./CardSkeleton.module.scss";

export const CardSkeleton = () => <div className={styles.cardSkeleton} />;

export const ImageSkeleton = () => <div className={styles.imageSkeleton} />;

export const TestimonialSkeleton = () => (
  <div className={styles.testimonialSkeleton}>
    <div className={styles.testimonialAvatar} />
    <div className={`${styles.testimonialLine} ${styles.wide}`} />
    <div className={`${styles.testimonialLine} ${styles.full}`} />
    <div className={`${styles.testimonialLine} ${styles.half}`} />
  </div>
);

export const AboutSkeleton = () => (
  <div className={styles.aboutSkeleton}>
    <div className={styles.aboutContainer}>
      <div className={styles.aboutContent}>
        <div className={styles.aboutFlex}>
          <div className={styles.aboutImage} />
          <div className={styles.aboutTextWrapper}>
            <div className={`${styles.aboutTextLine} ${styles.title}`} />
            <div className={`${styles.aboutTextLine} ${styles.full}`} />
            <div className={`${styles.aboutTextLine} ${styles.full}`} />
            <div className={`${styles.aboutTextLine} ${styles.partial}`} />
          </div>
        </div>
      </div>
    </div>
  </div>
);
