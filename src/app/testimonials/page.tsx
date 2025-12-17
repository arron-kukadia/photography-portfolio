'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Quote } from 'lucide-react'
import { useTestimonials } from '@/hooks/useTestimonials'

const TestimonialSkeleton = () => (
  <div className="rounded-lg border border-border bg-card p-8 animate-pulse">
    <div className="mb-6 h-16 w-16 rounded-full bg-muted" />
    <div className="mb-4 h-4 w-3/4 bg-muted rounded" />
    <div className="mb-2 h-4 w-full bg-muted rounded" />
    <div className="h-4 w-1/2 bg-muted rounded" />
  </div>
)

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
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative rounded-lg border border-border bg-card p-8 transition-colors hover:border-primary/50"
                >
                  <Quote className="absolute top-6 right-6 h-8 w-8 text-primary/20" />
                  
                  <div className="mb-6 flex items-center gap-4">
                    <div className="relative h-16 w-16 overflow-hidden rounded-full bg-muted">
                      {testimonial.image && (
                        <Image
                          src={testimonial.image.url}
                          alt={testimonial.name}
                          fill
                          sizes="64px"
                          className="object-cover"
                        />
                      )}
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">{testimonial.name}</h3>
                    </div>
                  </div>

                  {testimonial.content?.text && (
                    <p className="text-muted-foreground leading-relaxed">
                      &ldquo;{testimonial.content.text}&rdquo;
                    </p>
                  )}
                </motion.div>
              ))
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

export default TestimonialsPage
