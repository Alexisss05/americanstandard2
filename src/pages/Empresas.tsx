import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Building2, BarChart3, Users, Briefcase } from "lucide-react";

const benefits = [
  { icon: Building2, title: "Programas In-Company", desc: "Llevamos nuestros cursos directamente a tu empresa, adaptándonos a los horarios y necesidades de tu equipo." },
  { icon: BarChart3, title: "Medición de Resultados", desc: "Reportes mensuales de progreso individual y grupal con métricas claras de avance." },
  { icon: Users, title: "Formación a Medida", desc: "Diseñamos programas específicos según el sector y las competencias requeridas por tu empresa." },
  { icon: Briefcase, title: "ROI Garantizado", desc: "Nuestros programas corporativos están diseñados para generar impacto medible en la productividad." },
];

const Empresas = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-16 bg-card">
        <div className="container mx-auto px-4 text-center">
          <span className="text-secondary text-sm font-medium tracking-widest uppercase mb-4 block">Corporativo</span>
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4">
            Soluciones para <span className="text-gradient-blue">Empresas</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Potencia el talento de tu equipo con programas de inglés corporativo a medida.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            {benefits.map((b) => (
              <div key={b.title} className="bg-card rounded-xl p-8 border border-border hover:border-primary/40 hover:shadow-blue transition-all duration-300">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                  <b.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-3">{b.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="bg-primary rounded-2xl p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
              ¿Quieres capacitar a tu equipo?
            </h2>
            <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto mb-8">
              Contáctanos para recibir una propuesta personalizada sin compromiso.
            </p>
            <Button variant="secondary" size="lg" className="text-base px-10 py-6 font-semibold uppercase tracking-wide">
              Solicitar Propuesta
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Empresas;
