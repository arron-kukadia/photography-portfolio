"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Camera, Instagram, Mail } from "lucide-react";
import { useAboutMe } from "@/hooks/useAboutMe";
import { AboutSkeleton } from "@/components/skeletons/CardSkeleton/CardSkeleton";
import { INSTAGRAM_URL } from "@/lib/constants";
import styles from "./About.module.scss";

const AboutPage = () => {
  const { data: aboutMe, isLoading } = useAboutMe();

  if (isLoading) return <AboutSkeleton />;

  return (
    <div className={styles.page}>
      <section className={styles.header}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className={styles.title}>
            About <span className={styles.titleAccent}>Me</span>
          </h1>
          <p className={styles.subtitle}>The person behind the lens.</p>
        </motion.div>
      </section>

      <section className={styles.content}>
        <div className={styles.container}>
          <div className={styles.innerContainer}>
            <div className={styles.flex}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className={styles.imageSection}
              >
                <div className={styles.imageWrapper}>
                  {aboutMe?.image && (
                    <Image
                      src={aboutMe.image.url}
                      alt={aboutMe.name || "About me"}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className={styles.image}
                      priority
                    />
                  )}
                </div>
                <div className={styles.imageBorder} />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className={styles.textSection}
              >
                <div className={styles.role}>
                  <Camera className={styles.roleIcon} />
                  <span className={styles.roleText}>Photographer</span>
                </div>

                <h2 className={styles.name}>{aboutMe?.name}</h2>

                {aboutMe?.content?.text && (
                  <p className={styles.bio}>
                    {aboutMe.content.text.replace(/\\n/g, "\n")}
                  </p>
                )}

                <div className={styles.socialLinks}>
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                  >
                    <Instagram className={styles.socialIcon} />
                    <span className={styles.socialText}>Instagram</span>
                  </a>
                  <a
                    href="mailto:hello@example.com"
                    className={styles.socialLink}
                  >
                    <Mail className={styles.socialIcon} />
                    <span className={styles.socialText}>Contact</span>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
