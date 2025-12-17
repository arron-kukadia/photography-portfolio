"use client";

import { motion } from "framer-motion";
import { useTestimonials } from "@/hooks/useTestimonials";
import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { TestimonialSkeleton } from "@/components/skeletons/CardSkeleton";
import styles from "./Testimonials.module.scss";

const TestimonialsPage = () => {
  const { data: testimonials, isLoading } = useTestimonials();

  return (
    <div className={styles.page}>
      <section className={styles.section}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={styles.header}
          >
            <p className={styles.label}>Testimonials</p>
            <h1 className={styles.title}>
              Kind Words from
              <span className={styles.titleFaded}>Amazing People</span>
            </h1>
          </motion.div>

          <div className={styles.grid}>
            {isLoading ? (
              <>
                <TestimonialSkeleton />
                <TestimonialSkeleton />
                <TestimonialSkeleton />
                <TestimonialSkeleton />
              </>
            ) : (
              testimonials?.map((testimonial, index) => (
                <TestimonialCard
                  key={testimonial.id}
                  testimonial={testimonial}
                  index={index}
                />
              ))
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsPage;
