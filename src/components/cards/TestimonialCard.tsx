'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Quote } from 'lucide-react'
import { Testimonial } from '@/lib/types'

type TestimonialCardProps = {
  testimonial: Testimonial
  index: number
}

export const TestimonialCard = ({ testimonial, index }: TestimonialCardProps) => (
  <motion.div
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

    {testimonial.content && (
      <p className="text-muted-foreground leading-relaxed">
        &ldquo;{testimonial.content}&rdquo;
      </p>
    )}
  </motion.div>
)
