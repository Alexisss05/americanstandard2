import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Quiénes Somos", href: "/" },
  { label: "¿Por qué Nosotros?", href: "/nosotros" },
  { label: "Cursos", href: "/cursos" },
  { label: "Eventos", href: "/eventos" },
  { label: "Empresas", href: "/empresas" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-1 shrink-0">
          <span className="text-xl font-heading font-bold text-foreground">AMERICAN STANDARD</span>
          <span className="text-primary text-[10px] font-light tracking-widest uppercase hidden sm:inline">CDI</span>
        </Link>

        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-xs font-medium tracking-wide whitespace-nowrap transition-colors duration-300 ${
                location.pathname === link.href
                  ? "text-secondary font-semibold"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a href="https://wa.me/525521456414" target="_blank" rel="noopener noreferrer">
            <Button variant="heroRed" size="sm">
              Master Class GRATIS
            </Button>
          </a>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-foreground">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-background border-t border-border px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setIsOpen(false)}
              className={`block text-sm font-medium transition-colors ${
                location.pathname === link.href ? "text-secondary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a href="https://wa.me/525521456414" target="_blank" rel="noopener noreferrer">
            <Button variant="heroRed" size="sm" className="w-full">
              Master Class GRATIS
            </Button>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
