'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Instagram } from 'lucide-react'
import { INSTAGRAM_URL } from '@/lib/constants'

const navItems = [
  { href: '/', label: 'Work' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/about', label: 'About' },
]

export const Header = () => {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/60 to-transparent">
      <nav className="container mx-auto px-6">
        <div className="flex h-24 items-center justify-between">
          <Link href="/" className="text-xl font-extralight tracking-[0.2em] text-white uppercase">
            AK
          </Link>

          <div className="hidden items-center gap-10 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative py-2 text-sm font-normal tracking-wider uppercase transition-colors ${
                  pathname === item.href ? 'text-gold' : 'text-white/80 hover:text-white'
                }`}
              >
                {item.label}
                {pathname === item.href && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gold"
                  />
                )}
              </Link>
            ))}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 text-white/60 transition-colors hover:text-gold"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-white md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute left-0 right-0 top-24 z-40 border-t border-white/10 bg-black px-6 py-8 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-xl font-light tracking-wider ${
                      pathname === item.href ? 'text-gold' : 'text-white/70'
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-4 border-t border-white/10 pt-6"
              >
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 text-white/50 transition-colors hover:text-gold"
                >
                  <Instagram className="h-5 w-5" />
                  <span className="text-sm">Instagram</span>
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
