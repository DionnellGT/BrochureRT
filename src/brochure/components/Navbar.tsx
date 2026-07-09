import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { NavLink } from "@/brochure/data/data";

interface NavbarProps {
  logoUrl: string;
  links: NavLink[];
}

export function Navbar({ logoUrl, links }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md flex justify-between items-center px-6 max-w-[1200px] mx-auto transition-all ${
        scrolled ? "shadow-md py-3" : "py-4"
      }`}
    >
      <div className="flex items-center">
        <img
          src={logoUrl}
          alt="Remate de Terrenos Chiloé"
          className="h-10 md:h-12 w-auto object-contain"
        />
      </div>

      <div className="hidden md:flex items-center gap-8 text-base">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-muted-foreground hover:text-primary font-semibold transition-colors duration-200"
          >
            {link.label}
          </a>
        ))}
        <Button className="rounded-lg px-6 py-2.5 h-auto font-bold shadow-sm hover:bg-moss-container active:scale-95">
          Ver Catálogo
        </Button>
      </div>

      <button className="md:hidden text-primary p-2" aria-label="Abrir menú">
        <Menu className="size-7" />
      </button>
    </nav>
  );
}
