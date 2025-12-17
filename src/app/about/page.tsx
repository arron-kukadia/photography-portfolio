'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Camera, Instagram, Mail } from 'lucide-react'
import { useAboutMe } from '@/hooks/useAboutMe'
import { AboutSkeleton } from '@/components/skeletons/CardSkeleton'
import { INSTAGRAM_URL } from '@/lib/constants'

const AboutPage = () => {
  const { data: aboutMe, isLoading } = useAboutMe()

  if (isLoading) return <AboutSkeleton />

  return (
    <div className="min-h-screen bg-background pt-32">
      <section className="px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="mb-4 text-4xl font-extralight tracking-tight md:text-6xl">
            About <span className="text-gold">Me</span>
          </h1>
          <p className="mx-auto max-w-xl text-lg text-white/50">
            The person behind the lens.
          </p>
        </motion.div>
      </section>

      <section className="px-6 pb-20">
        <div className="container mx-auto">
          <div className="mx-auto max-w-5xl">
            <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-start">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative w-full max-w-md lg:w-1/2"
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-muted">
                  {aboutMe?.image && (
                    <Image
                      src={aboutMe.image.url}
                      alt={aboutMe.name || 'About me'}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                      priority
                    />
                  )}
                </div>
                <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-lg border border-gold/30" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex-1 lg:pt-8"
              >
                <div className="mb-6 flex items-center gap-3">
                  <Camera className="h-6 w-6 text-gold" />
                  <span className="text-sm uppercase tracking-[0.2em] text-white/50">
                    Photographer
                  </span>
                </div>

                <h2 className="mb-6 text-3xl font-extralight md:text-4xl">
                  {aboutMe?.name}
                </h2>

                {aboutMe?.content?.text && (
                  <p className="text-lg leading-relaxed text-white/60 whitespace-pre-line">
                    {aboutMe.content.text}
                  </p>
                )}

                <div className="mt-10 flex items-center gap-6">
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white/50 transition-colors hover:text-gold"
                  >
                    <Instagram className="h-5 w-5" />
                    <span className="text-sm">Instagram</span>
                  </a>
                  <a
                    href="mailto:hello@example.com"
                    className="flex items-center gap-2 text-white/50 transition-colors hover:text-gold"
                  >
                    <Mail className="h-5 w-5" />
                    <span className="text-sm">Contact</span>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
