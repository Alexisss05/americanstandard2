import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <Link to="/" className="text-2xl font-heading font-bold">
              <span className="text-primary">ENGLISH</span>
              <span className="ml-1 text-sm font-light tracking-widest uppercase opacity-70">Academy</span>
            </Link>
            <p className="text-sm mt-4 leading-relaxed opacity-70">
              Tu academia de inglés de confianza. Formación de calidad para alcanzar tus metas profesionales y personales.
            </p>
            <div className="flex gap-4 mt-6">
              {[Instagram, Facebook, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center opacity-70 hover:opacity-100 hover:bg-primary transition-all">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Academia</h4>
            <ul className="space-y-3">
              {[
                { label: "Nosotros", to: "/nosotros" },
                { label: "Cursos", to: "/cursos" },
                { label: "Eventos", to: "/eventos" },
                { label: "Empresas", to: "/empresas" },
              ].map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-sm opacity-70 hover:opacity-100 hover:text-primary transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Recursos</h4>
            <ul className="space-y-3">
              {["Blog", "Material Didáctico", "Exámenes", "FAQ"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm opacity-70 hover:opacity-100 hover:text-primary transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {["Política de Privacidad", "Términos de Uso", "Cookies"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm opacity-70 hover:opacity-100 hover:text-primary transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 text-center">
          <p className="text-sm opacity-60">© 2026 English Academy. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
