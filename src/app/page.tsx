'use client'

import { motion } from 'framer-motion'
import { usePortfolioCards } from '@/hooks/usePortfolio'
import { PortfolioCard } from '@/components/cards/PortfolioCard'
import { CardSkeleton } from '@/components/skeletons/CardSkeleton'

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
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
              </>
            ) : (
              portfolioCards?.map((card, index) => (
                <PortfolioCard key={card.id} card={card} index={index} />
              ))
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
