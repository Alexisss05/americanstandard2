import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Building2, BarChart3, Users, Globe } from "lucide-react";
import empresasBg from "@/assets/empresas-bg.jpg";
import heroBg from "@/assets/hero-bg.jpg";
import corporateImg from "@/assets/corporate.jpg";

const benefits = [
  { icon: Building2, title: "Programas In-Company", desc: "Llevamos nuestros cursos directamente a tu empresa, adaptándonos a los horarios y necesidades de tu equipo." },
  { icon: BarChart3, title: "Medición de Resultados", desc: "Reportes de progreso individual y grupal con métricas claras de avance." },
  { icon: Users, title: "Formación a Medida", desc: "Programas específicos según el sector y las competencias requeridas por tu empresa." },
  { icon: Globe, title: "Empresas Bilingües", desc: "Impulsamos a organizaciones a convertirse en empresas bilingües con soluciones lingüísticas personalizadas." },
];

const clients = ["Elektra", "Walmart", "Coca-Cola", "Nissan", "Coppel", "Burger King", "Nestlé", "BenefitHub", "AMPI", "Fraiche"];

const Empresas = () => {
  useScrollAnimation();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="relative pt-24 pb-16">
        <div className="absolute inset-0">
          <img src={empresasBg} alt="Empresas" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/85" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-4">
            Soluciones para <span className="text-secondary">Empresas</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Potencia el talento de tu equipo con programas de inglés corporativo a medida. Capacitación de capital humano con resultados comprobados.
          </p>
        </div>
      </section>

      {/* Benefits with image */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 items-center mb-10">
            <div className="animate-on-scroll slide-left">
              <div className="rounded-2xl overflow-hidden glow-blue">
                <img src={corporateImg} alt="Corporativo" className="w-full h-80 object-cover" loading="lazy" width={1920} height={1080} />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 stagger-children">
              {benefits.map((b) => (
                <div key={b.title} className="animate-on-scroll flex gap-4 bg-card rounded-xl p-4 border border-border hover:border-primary/40 card-hover">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <b.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-foreground text-sm mb-1">{b.title}</h3>
                    <p className="text-muted-foreground text-xs">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="relative py-16">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Clientes" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-background/90" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-8 animate-on-scroll">
            Empresas que <span className="text-secondary">Confían</span> en Nosotros
          </h2>
          <div className="flex flex-wrap justify-center gap-4 stagger-children">
            {clients.map((name) => (
              <div key={name} className="animate-on-scroll bg-card/60 backdrop-blur-sm rounded-lg px-6 py-3 border border-border card-hover">
                <span className="text-foreground font-heading font-semibold">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-heading font-bold text-secondary-foreground mb-4 animate-on-scroll">
            ¿Quieres capacitar a tu equipo?
          </h2>
          <p className="text-secondary-foreground/80 max-w-xl mx-auto mb-6 animate-on-scroll">
            Contáctanos para recibir una propuesta personalizada sin compromiso.
          </p>
          <a href="https://wa.me/525521456414" target="_blank" rel="noopener noreferrer">
            <Button variant="hero" size="lg" className="text-base px-10 py-6 animate-on-scroll">Solicitar Propuesta</Button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Empresas;
