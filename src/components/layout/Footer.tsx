import { Instagram, Youtube } from "lucide-react";
import { INSTAGRAM_URL, YOUTUBE_URL } from "@/lib/constants";
import styles from "./Footer.module.scss";

export const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.copyright}>
          © {new Date().getFullYear()} AK1Photography
        </div>
        <div className={styles.socialLinks}>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
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
      </div>
    </div>
  </footer>
);
