'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, X, ChevronLeft, ChevronRight } from 'lucide-react'
import { useGenreImages, usePortfolioCards } from '@/hooks/usePortfolio'
import { GenreType } from '@/lib/types'

const ImageSkeleton = () => (
  <div className="aspect-square bg-muted animate-pulse" />
)

const GenrePage = () => {
  const params = useParams()
  const genre = params.genre as string
  const genreKey = genre === 'street' ? 'cityscapes' : genre as GenreType
  
  const { data: images, isLoading } = useGenreImages(genreKey)
  const { data: cards } = usePortfolioCards()
  const currentCard = cards?.find((card) => card.route === genre)
  
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const handlePrev = () => {
    if (selectedIndex !== null && images) {
      setSelectedIndex(selectedIndex === 0 ? images.length - 1 : selectedIndex - 1)
    }
  }

  const handleNext = () => {
    if (selectedIndex !== null && images) {
      setSelectedIndex(selectedIndex === images.length - 1 ? 0 : selectedIndex + 1)
    }
  }

  return (
    <div className="min-h-screen pt-20">
      <section className="px-6 py-12">
        <div className="container mx-auto">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Portfolio
          </Link>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-light tracking-tight md:text-6xl"
          >
            {currentCard?.genre || genre}
          </motion.h1>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="container mx-auto">
          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4">
            {isLoading ? (
              <>
                <ImageSkeleton />
                <ImageSkeleton />
                <ImageSkeleton />
                <ImageSkeleton />
                <ImageSkeleton />
                <ImageSkeleton />
              </>
            ) : (
              images?.map((image, index) => (
                <motion.div
                  key={image.url}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="mb-4 break-inside-avoid"
                >
                  <button
                    onClick={() => setSelectedIndex(index)}
                    className="group relative block w-full overflow-hidden bg-muted"
                  >
                    <Image
                      src={image.url}
                      alt={`${genre} photo ${index + 1}`}
                      width={600}
                      height={800}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
                  </button>
                </motion.div>
              ))
            )}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedIndex !== null && images && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
            onClick={() => setSelectedIndex(null)}
          >
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-4 right-4 p-2 text-white/70 transition-colors hover:text-white"
              aria-label="Close"
            >
              <X className="h-8 w-8" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation()
                handlePrev()
              }}
              className="absolute left-4 p-2 text-white/70 transition-colors hover:text-white"
              aria-label="Previous"
            >
              <ChevronLeft className="h-10 w-10" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation()
                handleNext()
              }}
              className="absolute right-4 p-2 text-white/70 transition-colors hover:text-white"
              aria-label="Next"
            >
              <ChevronRight className="h-10 w-10" />
            </button>

            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-h-[90vh] max-w-[90vw]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[selectedIndex].url}
                alt={`${genre} photo ${selectedIndex + 1}`}
                width={1400}
                height={1000}
                className="max-h-[90vh] w-auto object-contain"
                priority
              />
            </motion.div>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-white/50">
              {selectedIndex + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default GenrePage
