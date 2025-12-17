import { Instagram, Youtube } from "lucide-react";
import { INSTAGRAM_URL, YOUTUBE_URL } from "@/lib/constants";

export const Footer = () => (
  <footer className="border-t border-white/10 bg-black">
    <div className="container mx-auto px-6 py-16">
      <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
        <div className="text-center text-xs uppercase tracking-wider text-white/30">
          © {new Date().getFullYear()} AK1Photography
        </div>
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
            href={YOUTUBE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/40 transition-colors hover:text-gold"
            aria-label="YouTube"
          >
            <Youtube className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  </footer>
);
