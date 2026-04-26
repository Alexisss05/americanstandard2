import { Link } from "react-router-dom";
import { Instagram, Facebook, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="font-heading font-bold text-lg">
              <span className="text-foreground">AMERICAN STANDARD</span>
              <span className="ml-1 text-xs font-light tracking-widest uppercase text-primary">CDI</span>
            </Link>
            <p className="text-sm mt-3 text-muted-foreground leading-relaxed">
              Centro de idiomas comprometido con brindar enseñanza accesible, innovadora y de alta calidad.
            </p>
            <div className="flex gap-3 mt-4">
              {[Instagram, Facebook, Phone].map((Icon, i) => (
                <a key={i} href={i === 2 ? "https://wa.me/525521456414" : "#"} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/20 transition-all">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-3 text-sm text-foreground">Academia</h4>
            <ul className="space-y-2">
              {[
                { label: "Inicio", to: "/" },
                { label: "Nosotros", to: "/nosotros" },
                { label: "Cursos", to: "/cursos" },
                { label: "Eventos", to: "/eventos" },
              ].map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-xs text-muted-foreground hover:text-primary transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-3 text-sm text-foreground">Servicios</h4>
            <ul className="space-y-2">
              {[
                { label: "Estándares", to: "/estandares" },
                { label: "Empresas", to: "/empresas" },
              ].map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-xs text-muted-foreground hover:text-primary transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-3 text-sm text-foreground">Contacto</h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li>📞 +52 55 2145 6414</li>
              <li>📧 info@americanstandardcdi.com.mx</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-6 text-center">
          <p className="text-xs text-muted-foreground">© 2026 American Standard Centro de Idiomas. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
