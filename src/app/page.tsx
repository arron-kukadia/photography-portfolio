'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ChevronDown } from 'lucide-react'
import { usePortfolioCards, useCoverImage } from '@/hooks/usePortfolio'
import { PortfolioCard } from '@/components/cards/PortfolioCard'
import { CardSkeleton } from '@/components/skeletons/CardSkeleton'

const Home = () => {
  const { data: portfolioCards, isLoading } = usePortfolioCards()
  const { data: coverImage } = useCoverImage()
  const heroImage = coverImage?.image?.url || portfolioCards?.[0]?.image?.url

  return (
    <div>
      <section className="relative h-screen w-full overflow-hidden">
        {heroImage && (
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className="absolute inset-0"
          >
            <Image
              src={heroImage}
              alt="Hero"
              fill
              priority
              quality={90}
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black" />
        
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mb-4 text-sm uppercase tracking-[0.4em] text-white/70"
            >
              Photography Portfolio
            </motion.p>
            <h1 className="mb-6 text-6xl font-extralight tracking-tight text-white md:text-8xl lg:text-9xl">
              Arron
              <span className="block font-light text-gold">Kukadia</span>
            </h1>
            <p className="mx-auto max-w-md text-lg font-light text-white/60">
              Capturing the extraordinary in every frame
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="absolute bottom-12"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ChevronDown className="h-8 w-8 text-white/50" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="relative bg-background px-6 py-16 md:py-32">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 text-center md:mb-20"
          >
            <h2 className="mb-4 text-4xl font-extralight tracking-tight md:text-5xl">
              Featured <span className="text-gold">Collections</span>
            </h2>
            <p className="mx-auto max-w-lg text-muted-foreground">
              Explore my portfolio across different genres of photography
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-6">
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
