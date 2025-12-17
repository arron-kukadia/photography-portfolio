'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { usePortfolioCards } from '@/hooks/usePortfolio'

const PortfolioCardSkeleton = () => (
  <div className="group relative aspect-[4/5] overflow-hidden bg-muted animate-pulse" />
)

const Home = () => {
  const { data: portfolioCards, isLoading } = usePortfolioCards()

  return (
    <div className="pt-20">
      <section className="relative flex min-h-[60vh] items-center justify-center px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center"
        >
          <h1 className="mb-6 text-5xl font-light tracking-tight md:text-7xl">
            Capturing <span className="text-primary">Moments</span>
          </h1>
          <p className="mx-auto max-w-xl text-lg text-muted-foreground">
            Professional photography showcasing the beauty of landscapes, portraits, cityscapes, and wildlife.
          </p>
        </motion.div>
      </section>

      <section className="px-6 py-20">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12 text-center text-sm font-light uppercase tracking-[0.3em] text-muted-foreground"
          >
            Explore My Work
          </motion.h2>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {isLoading ? (
              <>
                <PortfolioCardSkeleton />
                <PortfolioCardSkeleton />
                <PortfolioCardSkeleton />
                <PortfolioCardSkeleton />
              </>
            ) : (
              portfolioCards?.map((card, index) => (
                <motion.div
                  key={card.id}
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
              ))
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
