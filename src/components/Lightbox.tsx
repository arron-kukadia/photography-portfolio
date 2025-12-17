'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { Asset } from '@/lib/types'

type LightboxProps = {
  images: Asset[]
  selectedIndex: number | null
  onClose: () => void
  onPrev: () => void
  onNext: () => void
  altPrefix: string
}

export const Lightbox = ({
  images,
  selectedIndex,
  onClose,
  onPrev,
  onNext,
  altPrefix,
}: LightboxProps) => (
  <AnimatePresence>
    {selectedIndex !== null && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
        onClick={onClose}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-white/70 transition-colors hover:text-white"
          aria-label="Close"
        >
          <X className="h-8 w-8" />
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation()
            onPrev()
          }}
          className="absolute left-4 p-2 text-white/70 transition-colors hover:text-white"
          aria-label="Previous"
        >
          <ChevronLeft className="h-10 w-10" />
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation()
            onNext()
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
            alt={`${altPrefix} photo ${selectedIndex + 1}`}
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
)
