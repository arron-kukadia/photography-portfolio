import Link from 'next/link'
import { Instagram, Mail, Camera } from 'lucide-react'

export const Footer = () => (
  <footer className="border-t border-border/50 bg-card/50">
    <div className="container mx-auto px-6 py-12">
      <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
        <Link href="/" className="flex items-center gap-3 text-lg font-light tracking-wide">
          <Camera className="h-5 w-5 text-primary" />
          <span>Arron Kukadia Photography</span>
        </Link>

        <div className="flex items-center gap-6">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="Instagram"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <a
            href="mailto:hello@example.com"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Arron Kukadia. All rights reserved.
      </div>
    </div>
  </footer>
)
