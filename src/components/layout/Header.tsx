'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

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
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-white md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden bg-black/95 backdrop-blur-lg md:hidden"
            >
              <div className="flex flex-col gap-6 py-8">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-2xl font-extralight tracking-wider ${
                      pathname === item.href ? 'text-gold' : 'text-white/70'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
