'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { useGenreImages, usePortfolioCards } from '@/hooks/usePortfolio'
import { Lightbox } from '@/components/Lightbox'
import { ImageSkeleton } from '@/components/skeletons/CardSkeleton'
import { GenreType } from '@/lib/types'

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
    <div className="min-h-screen bg-background pt-32">
      <section className="px-6 pb-16">
        <div className="container mx-auto">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-xs uppercase tracking-wider text-white/40 transition-colors hover:text-gold"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Collections
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="mb-2 text-xs uppercase tracking-[0.3em] text-gold">
              Collection
            </p>
            <h1 className="text-5xl font-extralight tracking-tight md:text-7xl">
              {currentCard?.genre || genre}
            </h1>
          </motion.div>
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

      {images && (
        <Lightbox
          images={images}
          selectedIndex={selectedIndex}
          onClose={() => setSelectedIndex(null)}
          onPrev={handlePrev}
          onNext={handleNext}
          altPrefix={genre}
        />
      )}
    </div>
  )
}

export default GenrePage
