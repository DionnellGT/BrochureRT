import { Map } from "lucide-react";
import type { QuickNavLink } from "@/brochure/data/data";

interface QuickNavProps {
  links: QuickNavLink[];
}

export function QuickNav({ links }: QuickNavProps) {
  return (
    <section className="bg-white border-b border-mist-border sticky top-[64px] md:top-[72px] z-40 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden shadow-sm">
      <div className="max-w-[1200px] mx-auto px-6 max-sm:px-3 flex items-center py-4 gap-2 whitespace-nowrap">
        <span className="text-xs max-sm:text-[12px] font-bold text-secondary uppercase tracking-widest mr-2 flex items-center gap-1">
          <Map className="size-4" /> Saltar a:
        </span>
        {links.map((link) => (
          <a
            key={link.id}
            href={link.href}
            className={`px-4 max-sm:px-2 py-2 rounded-full font-bold transition-all border text-sm max-sm:text-[12px] ${
              link.highlighted
                ? "bg-primary/5 hover:bg-primary/10 text-primary border-primary/20"
                : "bg-muted hover:bg-surface-container-high text-muted-foreground border-mist-border"
            }`}
          >
            {link.label}
          </a>
        ))}
      </div>
    </section>
  );
}
