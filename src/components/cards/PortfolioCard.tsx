'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { PortfolioCard as PortfolioCardType } from '@/lib/types'

type PortfolioCardProps = {
  card: PortfolioCardType
  index: number
}

export const PortfolioCard = ({ card, index }: PortfolioCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <Link href={`/portfolio/${card.route}`} className="group block">
      <div className="relative aspect-[4/5] overflow-hidden bg-muted">
        <Image
          src={card.image.url}
          alt={card.genre}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="absolute inset-0 flex items-end p-6">
          <div className="translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <h3 className="text-2xl font-light text-white">{card.genre}</h3>
            <p className="mt-1 text-sm text-white/70">View Gallery →</p>
          </div>
        </div>
      </div>
    </Link>
  </motion.div>
)
