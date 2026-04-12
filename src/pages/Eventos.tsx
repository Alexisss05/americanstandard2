import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Users, MonitorSmartphone } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Eventos = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="relative pt-24 pb-16">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Eventos" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/85" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary-foreground mb-4">
            <span className="text-secondary">Eventos</span>
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Participa en nuestras actividades y vive el inglés más allá del aula.
          </p>
        </div>
      </section>

      {/* Domingo de Inglés */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-card rounded-2xl border border-border overflow-hidden">
            <div className="bg-primary p-8 text-center">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-2">
                Domingo de Inglés Online
              </h2>
              <p className="text-primary-foreground/80">CLASE COMPLETAMENTE GRATIS</p>
            </div>
            <div className="p-8">
              <p className="text-muted-foreground leading-relaxed mb-6">
                Te invitamos cordialmente a participar en nuestro evento especial <strong className="text-foreground">"Domingo de Inglés"</strong>, una excelente oportunidad para conocer nuestra metodología de enseñanza y experimentar la calidad de nuestro programa. Diseñadas para adaptarse a distintos niveles de inglés y ayudarte a avanzar de manera efectiva hacia la fluidez.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-3 bg-muted rounded-lg p-4">
                  <Calendar className="w-5 h-5 text-primary" />
                  <div>
                    <div className="text-xs text-muted-foreground">Fecha</div>
                    <div className="font-semibold text-foreground">25 de Mayo del 2025</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-muted rounded-lg p-4">
                  <Clock className="w-5 h-5 text-primary" />
                  <div>
                    <div className="text-xs text-muted-foreground">Horario</div>
                    <div className="font-semibold text-foreground">8:00 pm - 9:00 pm CDMX</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-muted rounded-lg p-4">
                  <Users className="w-5 h-5 text-primary" />
                  <div>
                    <div className="text-xs text-muted-foreground">Niveles</div>
                    <div className="font-semibold text-foreground">Básico e Intermedio</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-muted rounded-lg p-4">
                  <MonitorSmartphone className="w-5 h-5 text-primary" />
                  <div>
                    <div className="text-xs text-muted-foreground">Modalidad</div>
                    <div className="font-semibold text-foreground">Online (Google Meet)</div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <p className="text-foreground font-heading font-bold text-lg mb-4">¡TE VEMOS EL PRÓXIMO DOMINGO DE INGLÉS!</p>
                <a href="https://wa.me/525521456414" target="_blank" rel="noopener noreferrer">
                  <Button variant="hero" size="lg">Inscríbete Gratis</Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Eventos;
