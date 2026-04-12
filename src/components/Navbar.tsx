import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Cursos", href: "/cursos" },
  { label: "Eventos", href: "/eventos" },
  { label: "Estándares de Competencias", href: "/estandares" },
  { label: "Empresas", href: "/empresas" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-b border-border shadow-sm">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-1 shrink-0">
          <span className="text-xl font-heading font-bold text-gradient-blue">AMERICAN STANDARD</span>
          <span className="text-foreground text-[10px] font-light tracking-widest uppercase hidden sm:inline">CDI</span>
        </Link>

        {/* Desktop nav - always horizontal */}
        <div className="hidden xl:flex items-center gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-xs font-medium tracking-wide whitespace-nowrap transition-colors duration-300 ${
                location.pathname === link.href
                  ? "text-primary font-semibold"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a href="https://wa.me/525521456414" target="_blank" rel="noopener noreferrer">
            <Button variant="hero" size="sm">
              Agenda tu Master Class GRATIS
            </Button>
          </a>
        </div>

        {/* Tablet nav - scrollable horizontal */}
        <div className="hidden md:flex xl:hidden items-center gap-3 overflow-x-auto">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-[11px] font-medium tracking-wide whitespace-nowrap transition-colors duration-300 ${
                location.pathname === link.href
                  ? "text-primary font-semibold"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-foreground">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-t border-border px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setIsOpen(false)}
              className={`block text-sm font-medium transition-colors ${
                location.pathname === link.href ? "text-primary" : "text-muted-foreground hover:text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a href="https://wa.me/525521456414" target="_blank" rel="noopener noreferrer">
            <Button variant="hero" size="sm" className="w-full">
              Agenda tu Master Class GRATIS
            </Button>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
