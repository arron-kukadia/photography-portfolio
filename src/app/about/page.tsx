'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Camera, Instagram, Mail } from 'lucide-react'
import { useAboutMe } from '@/hooks/useAboutMe'

const AboutPage = () => {
  const { data: aboutMe, isLoading } = useAboutMe()

  if (isLoading) {
    return (
      <div className="min-h-screen pt-20">
        <div className="container mx-auto px-6 py-20">
          <div className="mx-auto max-w-4xl">
            <div className="flex flex-col gap-12 md:flex-row">
              <div className="h-96 w-full rounded-lg bg-muted animate-pulse md:w-1/2" />
              <div className="flex-1 space-y-4">
                <div className="h-10 w-3/4 bg-muted rounded animate-pulse" />
                <div className="h-4 w-full bg-muted rounded animate-pulse" />
                <div className="h-4 w-full bg-muted rounded animate-pulse" />
                <div className="h-4 w-2/3 bg-muted rounded animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-20">
      <section className="px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="mb-4 text-4xl font-light tracking-tight md:text-6xl">
            About <span className="text-primary">Me</span>
          </h1>
          <p className="mx-auto max-w-xl text-lg text-muted-foreground">
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
                <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-lg border border-primary/30" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex-1 lg:pt-8"
              >
                <div className="mb-6 flex items-center gap-3">
                  <Camera className="h-6 w-6 text-primary" />
                  <span className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                    Photographer
                  </span>
                </div>

                <h2 className="mb-6 text-3xl font-light md:text-4xl">
                  {aboutMe?.name}
                </h2>

                {aboutMe?.content?.html ? (
                  <div
                    className="prose prose-lg prose-invert prose-p:text-muted-foreground prose-p:leading-relaxed max-w-none"
                    dangerouslySetInnerHTML={{ __html: aboutMe.content.html }}
                  />
                ) : aboutMe?.content?.text ? (
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    {aboutMe.content.text}
                  </p>
                ) : null}

                <div className="mt-10 flex items-center gap-6">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
                  >
                    <Instagram className="h-5 w-5" />
                    <span className="text-sm">Instagram</span>
                  </a>
                  <a
                    href="mailto:hello@example.com"
                    className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
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
