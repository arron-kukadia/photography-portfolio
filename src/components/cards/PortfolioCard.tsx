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
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7, delay: index * 0.15 }}
  >
    <Link href={`/portfolio/${card.route}`} className="group relative block">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={card.image.url}
          alt={card.genre}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-all duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/30 transition-all duration-500 group-hover:bg-black/50" />
        
        <div className="absolute inset-0 flex items-end p-8">
          <div>
            <h3 className="text-3xl font-light text-white md:text-4xl">
              {card.genre}
            </h3>
            <div className="mt-4 h-px w-0 bg-gold transition-all duration-500 group-hover:w-24" />
          </div>
        </div>
      </div>
    </Link>
  </motion.div>
)
