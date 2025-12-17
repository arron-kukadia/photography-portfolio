'use client'

import { motion } from 'framer-motion'
import { useTestimonials } from '@/hooks/useTestimonials'
import { TestimonialCard } from '@/components/cards/TestimonialCard'
import { TestimonialSkeleton } from '@/components/skeletons/CardSkeleton'

const TestimonialsPage = () => {
  const { data: testimonials, isLoading } = useTestimonials()

  return (
    <div className="min-h-screen bg-background pt-32">
      <section className="px-6 pb-20">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-gold">
              Testimonials
            </p>
            <h1 className="mb-6 text-5xl font-extralight tracking-tight md:text-7xl">
              Kind Words from
              <span className="block text-white/50">Amazing People</span>
            </h1>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {isLoading ? (
              <>
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
