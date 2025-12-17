'use client'

import { motion } from 'framer-motion'
import { useTestimonials } from '@/hooks/useTestimonials'
import { TestimonialCard } from '@/components/cards/TestimonialCard'
import { TestimonialSkeleton } from '@/components/skeletons/CardSkeleton'

const TestimonialsPage = () => {
  const { data: testimonials, isLoading } = useTestimonials()

  return (
    <div className="min-h-screen pt-20">
      <section className="px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="mb-4 text-4xl font-light tracking-tight md:text-6xl">
            Client <span className="text-primary">Stories</span>
          </h1>
          <p className="mx-auto max-w-xl text-lg text-muted-foreground">
            Hear from the wonderful people I&apos;ve had the pleasure of working with.
          </p>
        </motion.div>
      </section>

      <section className="px-6 pb-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {isLoading ? (
              <>
                <TestimonialSkeleton />
                <TestimonialSkeleton />
                <TestimonialSkeleton />
                <TestimonialSkeleton />
                <TestimonialSkeleton />
                <TestimonialSkeleton />
              </>
            ) : (
              testimonials?.map((testimonial, index) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
              ))
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

export default TestimonialsPage
