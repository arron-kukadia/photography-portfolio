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
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.05, ease: 'easeOut' }}
    className="group relative rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all hover:border-gold/30 hover:bg-white/10"
  >
    <Quote className="absolute top-6 right-6 h-8 w-8 text-gold/20" />

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
        <h3 className="text-lg font-medium text-white">{testimonial.name}</h3>
      </div>
    </div>

    {testimonial.content && (
      <p className="text-white/70 leading-relaxed">
        &ldquo;{testimonial.content}&rdquo;
      </p>
    )}
  </motion.div>
)
