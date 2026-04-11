import { Instagram, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <a href="#hero" className="text-2xl font-heading font-bold">
              <span className="text-gradient-lime">VELO</span>
              <span className="text-foreground ml-1 text-sm font-light tracking-widest uppercase">Padel Club</span>
            </a>
            <p className="text-muted-foreground text-sm mt-4 leading-relaxed">
              El club de padel premium de Madrid. Donde la pasión por el deporte
              se encuentra con la excelencia.
            </p>
            <div className="flex gap-4 mt-6">
              {[Instagram, Facebook, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-lg bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Club</h4>
            <ul className="space-y-3">
              {["Sobre Nosotros", "Instalaciones", "Membresías", "Horarios"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Servicios</h4>
            <ul className="space-y-3">
              {["Clases Privadas", "Torneos", "Eventos", "Pro Shop"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-3">
              {["Política de Privacidad", "Términos de Uso", "Cookies", "FAQ"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2026 Velo Padel Club. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
