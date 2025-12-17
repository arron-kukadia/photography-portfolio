import Link from 'next/link'
import { Instagram, Mail } from 'lucide-react'
import { INSTAGRAM_URL } from '@/lib/constants'

export const Footer = () => (
  <footer className="border-t border-white/10 bg-black">
    <div className="container mx-auto px-6 py-16">
      <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
        <Link href="/" className="text-2xl font-extralight tracking-[0.2em] uppercase text-white">
          AK
        </Link>

        <div className="flex items-center gap-8">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/40 transition-colors hover:text-gold"
            aria-label="Instagram"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <a
            href="mailto:hello@example.com"
            className="text-white/40 transition-colors hover:text-gold"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>

      <div className="mt-12 text-center text-xs uppercase tracking-wider text-white/30">
        © {new Date().getFullYear()} Arron Kukadia Photography
      </div>
    </div>
  </footer>
)
