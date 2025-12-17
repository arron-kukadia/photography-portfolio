"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Quote } from "lucide-react";
import { Testimonial } from "@/lib/types";
import styles from "./TestimonialCard.module.scss";

type TestimonialCardProps = {
  testimonial: Testimonial;
  index: number;
};

export const TestimonialCard = ({
  testimonial,
  index,
}: TestimonialCardProps) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.05, ease: "easeOut" }}
    className={styles.card}
  >
    <Quote className={styles.quoteIcon} />

    <div className={styles.header}>
      <div className={styles.avatar}>
        {testimonial.image && (
          <Image
            src={testimonial.image.url}
            alt={testimonial.name}
            fill
            sizes="64px"
            className={styles.avatarImage}
          />
        )}
      </div>
      <div>
        <h3 className={styles.name}>{testimonial.name}</h3>
      </div>
    </div>

    {testimonial.content && (
      <p className={styles.content}>&ldquo;{testimonial.content}&rdquo;</p>
    )}
  </motion.div>
);
