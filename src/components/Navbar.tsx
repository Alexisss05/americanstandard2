import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logoTop from "@/assets/logotop.png";

const navLinks = [
  { label: "¿Quiénes Somos?", href: "/" },
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
      <div className="flex items-center justify-between h-20 px-6 md:px-8">
        <Link to="/" className="flex items-center shrink-0">
          <img src={logoTop} alt="American Standard" className="h-20 w-auto" />
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-base font-medium tracking-wide whitespace-nowrap transition-colors duration-300 ${
                location.pathname === link.href
                  ? "text-secondary font-semibold"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://wa.me/525521456414"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="heroRed" size="sm">
              Master Class GRATIS
            </Button>
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-foreground"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-background/90 backdrop-blur-xl border-t border-border px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setIsOpen(false)}
              className={`block text-base font-medium transition-colors ${
                location.pathname === link.href
                  ? "text-secondary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 border-t border-border">
            <a
              href="https://wa.me/525521456414"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="heroRed" size="sm" className="w-full">
                Master Class GRATIS
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
