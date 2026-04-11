import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Inicio", href: "#hero" },
  { label: "Nosotros", href: "#about" },
  { label: "Pistas", href: "#courts" },
  { label: "Membresías", href: "#pricing" },
  { label: "Equipo", href: "#coaches" },
  { label: "Contacto", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-20 px-4">
        <a href="#hero" className="text-2xl font-heading font-bold tracking-tight">
          <span className="text-gradient-lime">VELO</span>
          <span className="text-foreground ml-1 text-sm font-light tracking-widest uppercase">Padel Club</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted-foreground hover:text-primary text-sm font-medium tracking-wide uppercase transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <Button variant="hero" size="lg">
            Reservar Pista
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-foreground"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-background border-t border-border px-4 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-muted-foreground hover:text-primary text-sm font-medium tracking-wide uppercase transition-colors"
            >
              {link.label}
            </a>
          ))}
          <Button variant="hero" size="lg" className="w-full">
            Reservar Pista
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
